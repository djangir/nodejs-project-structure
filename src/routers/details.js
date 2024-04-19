import express from "express";
import utils from "../services/validateData.js";
import detailsController from "../controller/details.js";
const { validateIntParams } = utils;

const { createDetails, updateDetails, detailsData, deleteDetails } = detailsController;

const detailsRouter = express.Router();

detailsRouter.get("/details", detailsData);
detailsRouter.post("/details", createDetails);
detailsRouter.put("/details/:id", validateIntParams, updateDetails);
detailsRouter.delete("/details/:id", validateIntParams, deleteDetails);

export default detailsRouter;
