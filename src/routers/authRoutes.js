import express from "express";
import authController from "../controller/auth.js";
const authRoutes = express.Router();

const { signup, login } = authController;

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);

export default authRoutes;
