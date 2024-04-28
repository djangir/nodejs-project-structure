import express from "express";
import { cities } from "./controller.js";
import { tryCodeBlock } from "../services/tryCatch.js";

const apiCitiesRoutes = express.Router();

apiCitiesRoutes.get("/", (req, res, next) => tryCodeBlock(req, res, next, cities));
apiCitiesRoutes.get("/:id", (req, res, next) => tryCodeBlock(req, res, next, cities));

export { apiCitiesRoutes };
