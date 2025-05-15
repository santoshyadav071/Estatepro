const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // path sahi rakhein

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user (password hash pre-save hook se hoga)
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    // Compare password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // JWT secret (use .env in production)
    const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Send response with token and user info
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;