import express from "express";
import fetch from "node-fetch";
import rake from "node-rake";
import spyder from "./spyder.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const SERPER_API_KEY = `${process.env.SERPER_KEY}`;
console.log(process.env.NAME);

app.use(express.json());

const extractKeywords = (text) => {
  const keywords = rake.generate(text);
  const sentence = keywords.join(" ");
  console.log("Keywords =>", keywords);
  return sentence || "";
};

app.post("/search", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Search query is required." });
  }
  const keyword = extractKeywords(query);
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

    if (!apiResponse.ok) {
      throw new Error(`API call failed with status: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();

    const topUrls = data.organic?.slice(0, 5).map((item) => item.link) || [];

    console.log(`FIND URL ${topUrls.length} `);
    const results = await Promise.all(
      topUrls.map(async (url) => {
        try {
          const scrapedData = await spyder(url);
          return { url, data: scrapedData };
        } catch (err) {
          console.error(`Failed scraping ${url}:`, err.message);
          return { url, data: null, error: err.message };
        }
      })
    );
    res.status(200).json({ results });
  } catch (error) {
    console.error("Error during search:", error);
    res.status(500).json({ error: "Failed to fetch search results." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
