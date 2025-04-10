import { connect } from "mongoose";
import "dotenv/config";

export const dbConnect = async () => {
  try {
    await connect(process.env.DATABASE_URL);
  } catch (error) {
    console.log("Mongo DB connection failed", error);
  }
};
