import { Client } from "@hubspot/api-client";
import dotenv from "dotenv";
dotenv.config();

const { HUBSPOT_API_ACCESS_TOKEN, DEVELOPER_API_KEY } = process.env;

const hs = new Client({
  accessToken: HUBSPOT_API_ACCESS_TOKEN,
  /* developerApiKey: DEVELOPER_API_KEY, */
  /* basePath: "http://some-url", */
  defaultHeaders: { "Content-Type": "application/json" },
  numberOfApiCallRetries: 2,
});

export default hs;
