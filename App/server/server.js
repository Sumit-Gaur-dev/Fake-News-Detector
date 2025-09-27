import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import express from "express";
import fetch from "node-fetch";
import spyder from "./spyder.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import authRoutes from "./routes/auth.js";
import rateLimit from "express-rate-limit";
import cors from "cors";
dotenv.config();
await connectDB();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const SERPER_API_KEY = process.env.SERPER_KEY;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

app.use(express.json());

app.use("/api/auth", authRoutes);

const searchLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 1,
  message: {
    error: "Too many requests, please try again after a minute.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.post("/hlo", searchLimiter, async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Search query is required." });
  }
  res.status(200).json({ youSend: query });
  console.log("send");
});

app.post("/search", searchLimiter, async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Search query is required." });
  }

  let keyword = query;
  keyword = keyword + " news articles only";
  console.log(`Searching Google for: "${keyword}"`);

  try {
    const url = "https://google.serper.dev/search";
    const apiResponse = await fetch(url, {
      method: "POST",
      headers: {
        "X-API-KEY": SERPER_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ q: keyword }),
    });

    if (!apiResponse.ok)
      throw new Error(`API call failed: ${apiResponse.status}`);
    const data = await apiResponse.json();

    const topSources =
      data.organic?.slice(0, 3).map((item) => ({
        link: item.link,
        name: new URL(item.link).hostname.replace("www.", ""),
      })) || [];
    console.log(topSources);

    console.log(`Found ${topSources.length} URLs to scrape.`);
    const scrapedResults = await Promise.all(
      topSources.map(async (source) => {
        try {
          const scrapedData = await spyder(source.link);
          return { name: source.name, data: scrapedData };
        } catch (err) {
          return { name: source.name, data: null };
        }
      })
    );

    const validScrapes = scrapedResults.filter((result) => result.data);
    if (validScrapes.length === 0) {
      return res.status(400).json({ error: "Could not retrieve content." });
    }

    const combinedText = validScrapes
      .map(
        (result, index) =>
          `--- Article ${index + 1} from ${result.name} ---\n${result.data}`
      )
      .join("\n\n");

    const prompt = `
      You are a fact-checking news analyst. Your task is to analyze the following articles and provide a structured JSON response.
      
      take the reference of the article provided articles, perform the following actions:
      1. Give True,False,Fabricated at the beginnning of the summarized result.
      1. Write a concise, neutral overall summary of the topic.
      2. Assign an overall reliability score from 0 to 100 based on the consistency and evidence in the articles. 
      3. For each individual source article, provide a brief summary of its key points and assign it an individual reliability score from 0 to 100.

      Here is the exact JSON structure you MUST return:
      {
        "summary": "Your overall summary here.",
        "score": <overall score as a number>,
        "graphScore": [
          { "srcName": "Source name (e.g., bbc.com)", "srcScore": <score as a number> }
        ],
        "sources": [
          { "srcName": "Source name (e.g., cnn.com)", "data": "Brief summary of this specific article." }
        ]
      }

      Here are the articles:
      ${combinedText}
    `;

    console.log("Sending content to AI for analysis...");
    const aiResult = await model.generateContent(prompt);
    const response = await aiResult.response;
    const analysisText = response.text();

    try {
      const analysisJson = JSON.parse(analysisText);
      res.status(200).json(analysisJson);
      console.log(analysisJson.stringify());
      console.log("Finish");
    } catch (parseError) {
      console.error("Failed to parse JSON response from AI:", analysisText);
      throw new Error("AI returned malformed data.");
    }
  } catch (error) {
    console.error("Error during search:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch or process search results." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
