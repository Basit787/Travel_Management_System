const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./db");
const routes = require("./routes/index.routes");
require("dotenv/config");

const app = express();
app.use(express.json());
app.use(cors());

dbConnect();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tourism Management API" });
});

app.use("/api", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
