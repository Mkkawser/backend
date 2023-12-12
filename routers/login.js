const express = require("express");
const jwt = require("jsonwebtoken");
const profileModel = require("../models/profile");
const login = express.Router();

login.post("/api/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const value = await profileModel.findOne({ email });
    if (value && value.pass === pass) {
      const token = jwt.sign({ _id: value._id.toString() }, "secretkey", {
        expiresIn: "1 min",
      });
      res.json({ token });
    } else res.send("Not Found");
  } catch (error) {
    res.send("Server Error");
  }
});

module.exports = login;
