import express from "express";
import { createPost, getPosts } from "../controllers/post.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.route("/")
  .get(getPosts)
  .post(protect, createPost);

export default router;