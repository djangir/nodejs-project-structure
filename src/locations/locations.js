import express from "express";
import data from "../data/lodations.js";
import utils from "../services/validateData.js";
import CrudController from "../controller/crudController.js";
const { validateIntParams } = utils;

const { cities, states, countries } = data;

const locations = express.Router();

locations.get("/country", (req, res, next) => {
  return res.status(200).json(countries);
});

locations.get("/state/:country_id", validateIntParams, (req, res, next) => {
  const countryId = parseInt(req.params.country_id);
  const { filterData } = new CrudController(states);
  const statesInCountry = filterData("country_id", countryId);
  return res.status(200).json(statesInCountry);
});

locations.get("/city/:state_id", validateIntParams, (req, res, next) => {
  const stateId = parseInt(req.params.state_id);
  const { filterData } = new CrudController(cities);
  const citiesInState = filterData("state_id", stateId);
  return res.status(200).json(citiesInState);
});

export default locations;
