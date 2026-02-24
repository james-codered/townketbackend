export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: "customer" | "entrepreneur"; // ✅ ADD THIS
  bio?: string;
  avatar?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: { 
      type: String, 
      enum: ["customer", "entrepreneur"], 
      default: "customer" 
    }, // ✅ ADD THIS

    bio: String,
    avatar: String,

    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  { timestamps: true }
);
