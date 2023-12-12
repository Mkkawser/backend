const express = require("express");
const cors = require("cors");
const profileRouter = require("./routers/profile");
const mongoose = require("mongoose");
const login = require("./routers/login");
const jwtToken = require("./helper/jwt");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(
  cors({
    origin: ["http://localhost:5173/"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    `mongodb+srv://Mkkawser:irumorgan420@cluster0.ed1v50g.mongodb.net/myapp`
  )
  .then(console.log("connect"))
  .catch(() => console.log("Server Error"));

app.use(profileRouter);
app.use(login);

app.get("/", (req, res) => {
  res.json({ message: "Homepage" });
});

app.listen(port, () => {
  console.log("running");
});
