import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
import postRoutes from "./routes/post.routes";
import { errorHandler } from "./middleware/error.middleware";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: [
    "https://frontend-townket.vercel.app",
    "https://frontend-townket-git-main-james-samuel-s-projects.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
