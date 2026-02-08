import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    if (!resumeText || !jobDescription) {
      return res.status(400).json({ error: "Missing input" });
    }

    const prompt = `
You are a career assistant.

1. Write a tailored cover letter (200 words)
2. Give resume improvement suggestions

Return ONLY JSON:
{
 "coverLetter": "...",
 "suggestions": "..."
}

Resume:
${resumeText}

Job:
${jobDescription}
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let text = response.data.choices[0].message.content;

    // remove ```json wrappers
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = {
        coverLetter: text,
        suggestions: ""
      };
    }

    res.json(parsed);

  } catch (err) {
    console.log("AI ERROR:", err.message);
    res.status(500).json({ error: "AI failed" });
  }
});

export default router;
