const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();

app.use(cors());
console.log(process.env.DATABASE);

app.get("/", (req, res) => {
  res.json({ message: "Homepage" });
});

app.listen(3000, () => {
  console.log("running");
});
