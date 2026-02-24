import { Request, Response } from "express";
import Business from "../models/business.model";

// ================= GET MY BUSINESS =================
export const getMyBusiness = async (req: any, res: Response) => {
  try {
    const business = await Business.findOne({ userId: req.user.id });

    if (!business) {
      return res.status(200).json(null);
    }

    res.json(business);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ================= SAVE OR UPDATE BUSINESS =================
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
