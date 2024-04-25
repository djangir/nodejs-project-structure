import express from "express";
import locations from "../locations/locations.js";
import detailsRouter from "../details/routes.js";
import authRoutes from "../auth/routes.js";
import validateLogin from "../auth/validateLogin.js";

const allRoutes = express.Router();

allRoutes.use("/auth", authRoutes);
allRoutes.use("/locations", validateLogin, locations);
allRoutes.use(validateLogin, detailsRouter);

export default allRoutes;
