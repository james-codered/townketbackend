import { Request, Response } from "express";
import Post from "../models/Post";

export const createPost = async (req: any, res: Response) => {
  const post = await Post.create({
    author: req.user.id,
    content: req.body.content
  });

  res.status(201).json(post);
};

export const getPosts = async (_req: Request, res: Response) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
};
