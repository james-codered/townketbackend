import express from "express";
import { register, login, forgotPassword } from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/reset-password/:token", resetPassword);
router.post("/forgot-password", forgotPassword);

export default router;
