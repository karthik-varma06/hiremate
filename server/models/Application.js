// server/models/Application.js
const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    company: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    resumeText: { type: String, default: "" },
    jobDescription: { type: String, default: "" },
    coverLetter: { type: String, default: "" },
    suggestions: { type: String, default: "" },
    resumeFile: { type: String, default: "" }, // URL path to uploaded file (/uploads/...)
    createdAt: { type: Date, default: Date.now, index: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Application", ApplicationSchema);
