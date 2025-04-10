const mongoose = require("mongoose");
require("dotenv/config");

exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("mongo DB connection Successfull !");
  } catch (error) {
    console.log("Mongo DB connection failed", error);
  }
};
