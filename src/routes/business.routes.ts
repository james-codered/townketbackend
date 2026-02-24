import express from "express";
import { protect } from "../middleware/auth.middleware";
import { saveBusinessProfile, getMyBusiness } from "../controllers/business.controller";

const router = express.Router();

// Get logged in entrepreneur profile
router.get("/me", protect, getMyBusiness);

// Save or update entrepreneur business profile
router.post("/", protect, saveBusinessProfile);

export default router;
