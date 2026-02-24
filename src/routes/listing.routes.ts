import express from "express";
import { protect } from "../middleware/auth.middleware";
import {
  getMyListings,
  createListing,
  deleteListing,
} from "../controllers/listing.controller";

const router = express.Router();

router.get("/me", protect, getMyListings);
router.post("/", protect, createListing);
router.delete("/:id", protect, deleteListing);

export default router;
