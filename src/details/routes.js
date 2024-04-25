import express from "express";
import utils from "../services/validateData.js";
import detailsController from "./controller.js";
const { validateIntParams } = utils;

const { createDetails, updateDetails, detailsData, deleteDetails, findOneData } = detailsController;

const detailsRouter = express.Router();

detailsRouter.get("/details", detailsData);
detailsRouter.post("/details", createDetails);
detailsRouter.put("/details/:id", validateIntParams, updateDetails);
detailsRouter.delete("/details/:id", validateIntParams, deleteDetails);
detailsRouter.get("/details/:id", validateIntParams, findOneData);

export default detailsRouter;
