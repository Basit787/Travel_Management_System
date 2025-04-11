import express from "express";
import cors from "cors";
import { dbConnect } from "../src/db/index.js";
import routes from "../src/routes/index.routes.js";
import ServerlessHttp from "serverless-http";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

dbConnect();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tourism Management API" });
});

// app.listen(process.env.PORT);

app.use("/api", routes);

export default app;
export const handler = ServerlessHttp(app);
