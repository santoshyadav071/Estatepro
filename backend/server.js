const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const User = require("./models/User");
const propertyRoutes = require("./routes/propertyRoutes");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Body parser

// Property Routes
app.use("/api/properties", propertyRoutes);

// Auth routes
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Create new user (password will be hashed in pre-save)
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email" });

    // Compare password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    // JWT secret
    const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));