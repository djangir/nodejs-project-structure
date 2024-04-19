// const express = require('express'); remove type module from package.json file so it works
import { configDotenv } from "dotenv";
import express from "express";
import allRoutes from "./src/routers/index.js";
configDotenv();
const app = express();

const port = process.env.PORT;

app.use("/api/v1/", allRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message || err);
});

app.listen(port, () => console.log("app listening on port " + port));
