const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const applicationsRoute = require("./routes/applications");
const generateRoute = require("./routes/generate");

app.use("/api/applications", applicationsRoute);
app.use("/api/generate", generateRoute);

app.get("/", (req, res) => {
  res.send("API running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server running on 5000"));
