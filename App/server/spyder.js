import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import fetch from "node-fetch";

async function spyder(url) {
  const dataLenght = 800;

  try {
    const response = await fetch(url);
    const html = await response.text();
    const doc = new JSDOM(html, { url: url });
    const reader = new Readability(doc.window.document);
    const article = reader.parse();

    return article ? article.textContent.substring(0, dataLenght) : null;
  } catch (error) {
    console.error("Could not fetch or parse the article:", error);
    return null;
  }
}

export default spyder;
