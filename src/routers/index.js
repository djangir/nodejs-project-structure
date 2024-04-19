import express from "express";
import locations from "./locations.js";
import detailsRouter from "./details.js";
import authRoutes from "./authRoutes.js";
import validateLogin from "../controller/validateLogin.js";

const allRoutes = express.Router();

allRoutes.use("/auth", authRoutes);
allRoutes.use("/locations", validateLogin, locations);
allRoutes.use(validateLogin, detailsRouter);

export default allRoutes;
