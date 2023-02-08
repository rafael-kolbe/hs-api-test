import express from "express";
import { getContacts } from "./controllers/hubspot.js";

const route = express();

route.get("/", getContacts);

export default route;
