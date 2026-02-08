import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

// SAVE
router.post("/", async (req, res) => {
  try {
    const app = await Application.create(req.body);
    res.json(app);
  } catch (err) {
    console.log("POST error:", err);
    res.status(500).json({ error: "Save failed" });
  }
});

// GET ALL
router.get("/", async (req, res) => {
  try {
    const apps = await Application.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    console.log("GET error:", err);
    res.status(500).json({ error: "Failed to fetch" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    console.log("DELETE error:", err);
    res.status(500).json({ error: "Delete failed" });
  }
});

export default router;
