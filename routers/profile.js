const express = require("express");
const { getProfile, postProfile } = require("../controllers/profile");
const profileRouter = express.Router();

profileRouter.get("/api/profile", getProfile);
profileRouter.post("/api/profile", postProfile);

module.exports = profileRouter;