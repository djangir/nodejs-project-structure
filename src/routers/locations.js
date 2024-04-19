import express from "express";
import data from "../data/lodations.js";

const { cities, states, countries } = data;

const locations = express.Router();

// Routes
locations.get("/country", (req, res, next) => {
  return res.status(200).json(countries);
});

locations.get("/state/:country_id", (req, res, next) => {
  const countryId = parseInt(req.params.country_id);
  const statesInCountry = states.filter((state) => state.country_id === countryId);
  return res.status(200).json(statesInCountry);
});

locations.get("/city/:state_id", (req, res, next) => {
  const stateId = parseInt(req.params.state_id);
  const citiesInState = cities.filter((city) => city.state_id === stateId);
  return res.status(200).json(citiesInState);
});

export default locations;
