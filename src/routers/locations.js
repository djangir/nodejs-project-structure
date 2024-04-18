import express from "express";

const locations = express.Router();

locations.get("/country", (req, res, next) => {
  return res.status(200).send("country");
});

locations.get("/state/:country_id", (req, res, next) => {
  return res.status(200).send("state");
});

locations.get("/city/:state_id", (req, res, next) => {
  return res.status(200).send("city");
});

export default locations;
