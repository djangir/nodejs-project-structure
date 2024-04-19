import express from "express";
import data from "../data/lodations.js";
import utils from "../services/validateData.js";
const { validateIntParams } = utils;

const { cities, states, countries } = data;

const locations = express.Router();

const dataFilterHelper = (data, key, match) => data.filter((state) => state[key] == match);

locations.get("/country", (req, res, next) => {
  return res.status(200).json(countries);
});

locations.get("/state/:country_id", validateIntParams, (req, res, next) => {
  const countryId = parseInt(req.params.country_id);
  const statesInCountry = dataFilterHelper(states, "country_id", countryId);
  return res.status(200).json(statesInCountry);
});

locations.get("/city/:state_id", validateIntParams, (req, res, next) => {
  const stateId = parseInt(req.params.state_id);
  const citiesInState = dataFilterHelper(cities, "state_id", stateId);
  return res.status(200).json(citiesInState);
});

export default locations;
