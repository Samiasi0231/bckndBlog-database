
const express = require("express");
require("dotenv").config();
const envConstants = require("./config/constant");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  return res.status(200).json({ message: "Welcome to my blog app api" });
});

app.use("/api", require("./router/postRoutes"));
app.use("*", (req, res) => {
  return res.status(404).json({ error: "Route not found", statusText: "fail" });
});

const PORT = process.env.PORT || 5000;

mongoose
.connect(envConstants.MONGODB_URL)
  .then((data) => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log("listening very well,port nver deaf " + PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });
