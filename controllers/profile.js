const profileModel = require("../models/profile");

const getProfile = async (req, res) => {
  const data = await profileModel.find({});
  res.json(data);
};
const postProfile = async (req, res) => {
  try {
    const data = await profileModel.create(req.body);
    res.json({ message: "Post" });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      // MongoDB duplicate key error (11000)
      res.json({ error: "Duplicate key error. Email already exists." });
    } else {
      // Other errors
      res.json({ error: "Server error" });
    }
  }
};

const putProfile = (req, res) => {
  res.json({ message: "put" });
};
const delProfile = (req, res) => {
  res.json({ message: "del" });
};

module.exports = {
  getProfile,
  postProfile,
  putProfile,
  delProfile,
};
