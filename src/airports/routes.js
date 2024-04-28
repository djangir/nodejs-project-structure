import express from "express";
import { airports } from "./controller.js";
import { tryCodeBlock } from "../services/tryCatch.js";

const apiportRoutes = express.Router();

apiportRoutes.get("/", (req, res, next) => tryCodeBlock(req, res, next, airports));
apiportRoutes.get("/:id", (req, res, next) => tryCodeBlock(req, res, next, airports));

export { apiportRoutes };
