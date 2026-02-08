import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import appRoutes from "./routes/applications.js";
import genRoutes from "./routes/generate.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo connected"))
.catch(err=>console.log(err));

app.use("/api/applications", appRoutes);
app.use("/api/generate", genRoutes);

app.listen(5000, ()=>console.log("Server running on 5000"));
