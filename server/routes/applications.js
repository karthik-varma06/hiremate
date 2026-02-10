const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Application = mongoose.model(
  "Application",
  new mongoose.Schema({
    company: String,
    role: String,
    resumeText: String,
    jobDescription: String,
    coverLetter: String,

    // ✅ IMPORTANT FIX
    suggestions: [String],   // must be array

    createdAt: { type: Date, default: Date.now }
  })
);

router.get("/", async (req, res) => {
  const apps = await Application.find().sort({ createdAt: -1 });
  res.json(apps);
});

router.post("/", async (req, res) => {
  try {
    const app = new Application(req.body);
    await app.save();
    res.json(app);
  } catch (err) {
    res.status(500).json({ error: "Save failed" });
  }
});

module.exports = router;
