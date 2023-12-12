const jwt = require("jsonwebtoken");

const jwtToken = async () => {
  const token = await jwt.sign(
    {
      _id: "6573586d4bc4e39eadf24138",
      name: "Kawser Hossain",
      age: 11,
      email: "irumorgan420@gmail.com",
      pass: "123",
    },
    "secret",
    {
      expiresIn: "1 min",
    }
  );
  const verify = await jwt.verify(token, "secret");
  console.log("token", token);
  console.log("verify", verify);
};
module.exports = jwtToken;
