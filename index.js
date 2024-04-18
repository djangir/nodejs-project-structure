// const express = require('express'); remove type module from package.json file so it works
import { configDotenv } from "dotenv";
import express from "express";
import allRoutes from "./src/routers/index.js";

// calls
configDotenv();
const app = express();
// calls

// variales
const port = process.env.PORT;
// variales

app.use("/api/v1/", allRoutes);

app.listen(port);
