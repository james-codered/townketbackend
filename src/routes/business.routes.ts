import express from "express";
import { saveBusinessProfile } from "../controllers/business.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

// Save or update entrepreneur business profile
router.post("/", protect, saveBusinessProfile);

export default router;
