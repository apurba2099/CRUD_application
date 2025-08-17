import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000; // Server port (from .env or defaults to 7000 if not set)
const MONGOURL = process.env.MONGO_URL; // MongoDB connection string (from .env file)

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port :${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
