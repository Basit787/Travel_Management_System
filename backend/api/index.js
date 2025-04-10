const express = require("express");
const cors = require("cors");
const { dbConnect } = require("../src/db");
const routes = require("../src/routes/index.routes");
const ServerlessHttp = require("serverless-http");
require("dotenv/config");

const app = express();
app.use(express.json());
app.use(cors());

dbConnect();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tourism Management API" });
});

app.use("/api", routes);

module.exports = app;

module.exports.handler = ServerlessHttp(app);
