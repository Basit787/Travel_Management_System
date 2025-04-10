const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const SECRET_KEY = process.env.SECRET_KEY;

exports.HashedPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    console.log(error);
    throw new Error("Error while creating hash password");
  }
};

exports.ComparePassword = async (userPassword, hashPassword) => {
  try {
    return await bcrypt.compare(userPassword, hashPassword);
  } catch (error) {
    console.log(error);
    throw new Error("Error while comparing password");
  }
};

exports.CreateToken = (payload) => {
  try {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  } catch (error) {
    console.log(error);
    throw new Error("Error while creating jwt token");
  }
};

exports.VerifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.log(error);
    throw new Error("Error while verifying jwt token");
  }
};
