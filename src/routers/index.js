import express from "express";
import locations from "./locations.js";
import detailsRouter from "./details.js";
import authRoutes from "./authRoutes.js";

const allRoutes = express.Router();

allRoutes.use("/auth", authRoutes);
allRoutes.use("/locations", locations);
allRoutes.use(detailsRouter);

export default allRoutes;
