import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    resumeText: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
      default: "",
    },
    suggestions: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model("Application", ApplicationSchema);
