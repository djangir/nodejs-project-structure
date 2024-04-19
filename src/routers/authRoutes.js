import express from "express";
import authController from "../controller/auth.js";

const { signup, login } = authController;

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/signup", signup);

export default authRoutes;
