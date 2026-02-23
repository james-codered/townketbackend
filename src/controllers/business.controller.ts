import { Request, Response } from "express";
import Business from "../models/business.model";

// Create or Update Business Profile
export const saveBusinessProfile = async (req: any, res: Response) => {
  try {
    const {
      businessName,
      description,
      contact,
      category,
      address,
      latitude,
      longitude,
    } = req.body;

    const userId = req.user.id;

    let business = await Business.findOne({ userId });

    if (business) {
      // Update existing
      business.businessName = businessName;
      business.description = description;
      business.contact = contact;
      business.category = category;
      business.address = address;
      business.latitude = latitude;
      business.longitude = longitude;

      await business.save();

      return res.json(business);
    }

    // Create new
    business = await Business.create({
      userId,
      businessName,
      description,
      contact,
      category,
      address,
      latitude,
      longitude,
    });

    res.status(201).json(business);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
