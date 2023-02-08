import express from "express";
import route from "./routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use(route);

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);
