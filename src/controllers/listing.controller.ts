import { Request, Response } from "express";

// TEMPORARY dummy controller so build can pass

export const createListing = async (req: Request, res: Response) => {
  res.status(201).json({ message: "Listing created (temporary)" });
};

export const getMyListings = async (req: Request, res: Response) => {
  res.status(200).json([]);
};

export const deleteListing = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Listing deleted (temporary)" });
};
