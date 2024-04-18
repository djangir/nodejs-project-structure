import express from "express";
import locations from "./locations.js";

const allRoutes = express.Router();

allRoutes.use("/locations", locations);

export default allRoutes;
