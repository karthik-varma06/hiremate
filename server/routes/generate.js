const express = require("express");
const router = express.Router();
const axios = require("axios");
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse/lib/pdf-parse.js");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("resumeFile"), async (req, res) => {
  try {
    let { company, role, resume, jobDescription } = req.body;

    // =========================
    // PDF RESUME PARSE
    // =========================
    if (req.file) {
      try {
        const buffer = fs.readFileSync(req.file.path);
        const pdfData = await pdfParse(buffer);
        resume = pdfData.text;
        fs.unlinkSync(req.file.path);
      } catch (e) {
        console.log("PDF parse error:", e.message);
      }
    }

    // =========================
    // PROMPT
    // =========================
    const prompt = `
Write a professional cover letter.

Company: ${company}
Role: ${role}

Resume:
${resume}

Job Description:
${jobDescription}

Return ONLY valid JSON like:
{
 "coverLetter": "...",
 "suggestions": ["...", "..."]
}
`;

    // =========================
    // OPENROUTER CALL
    // =========================
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    let text = response.data.choices[0].message.content;

    // =========================
    // CLEAN JSON
    // =========================
    text = text.replace(/```json|```/g, "").trim();

    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = {
        coverLetter: text,
        suggestions: []
      };
    }

    res.json(parsed);

  } catch (err) {
    console.log("AI ERROR:", err.response?.data || err.message);
    res.status(500).json({ error: "AI failed" });
  }
});

module.exports = router;
