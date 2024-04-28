import express from "express";
import locations from "../locations/locations.js";
import detailsRouter from "../details/routes.js";
import authRoutes from "../auth/routes.js";
import validateLogin from "../auth/validateLogin.js";
import { apiportRoutes } from "../airports/routes.js";

const allRoutes = express.Router();

try {
  allRoutes.use("/auth", authRoutes);
  allRoutes.use("/locations", validateLogin, locations);
  allRoutes.use("/airports", apiportRoutes);
  allRoutes.use(validateLogin, detailsRouter);
} catch (e) {
  console.log(e);
}
export default allRoutes;
