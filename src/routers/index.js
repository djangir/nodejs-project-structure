import express from "express";
import locations from "./locations.js";
import detailsRouter from "./details.js";

const allRoutes = express.Router();

allRoutes.use("/locations", locations);
allRoutes.use(detailsRouter);

export default allRoutes;
