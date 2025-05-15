const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Create a Property
router.post('/', async (req, res) => {
  try {
    // Validate required fields
    const requiredFields = ['title', 'description', 'price', 'location', 'image', 'propertyType', 'contactNumber'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: 'Missing required fields',
        missingFields
      });
    }

    // Create property with all valid fields
    const property = new Property(req.body);
    const savedProperty = await property.save();

    res.status(201).json({
      success: true,
      data: savedProperty
    });

  } catch (err) {
    // Handle validation errors
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }
    
    // Handle other errors
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// Get all Properties with filtering
router.get('/', async (req, res) => {
  try {
    // Build query based on query parameters
    const query = {};
    
    // Filter by property type if provided
    if (req.query.propertyType) {
      query.propertyType = req.query.propertyType;
    }
    
    // Filter by price range if provided
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};
      if (req.query.minPrice) query.price.$gte = Number(req.query.minPrice);
      if (req.query.maxPrice) query.price.$lte = Number(req.query.maxPrice);
    }
    
    // Text search
    if (req.query.search) {
      query.$text = { $search: req.query.search };
    }

    const properties = await Property.find(query);
    
    res.status(200).json({
      success: true,
      count: properties.length,
      data: properties
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// Get single Property
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    
    if (!property) {
      return res.status(404).json({
        success: false,
        message: 'Property not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: property
    });

  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid property ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// Update Property
router.put('/:id', async (req, res) => {
  try {
    // Exclude fields that shouldn't be updated
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'price', 'location', 'image', 
                          'propertyType', 'bedrooms', 'bathrooms', 'area', 'contactNumber'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    
    if (!isValidOperation) {
      return res.status(400).json({
        success: false,
        message: 'Invalid updates!'
      });
    }

    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!property) {
      return res.status(404).json({
        success: false,
        message: 'Property not found'
      });
    }

    res.status(200).json({
      success: true,
      data: property
    });

  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// Delete Property
router.delete('/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    
    if (!property) {
      return res.status(404).json({
        success: false,
        message: 'Property not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Property deleted successfully'
    });

  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid property ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

module.exports = router;