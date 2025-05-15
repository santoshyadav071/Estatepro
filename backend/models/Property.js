const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be positive']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true
  },
  propertyType: {
    type: String,
    enum: {
      values: ['Rent', 'Sale'],
      message: 'Property type must be either Rent or Sale'
    },
    required: [true, 'Property type is required']
  },
  bedrooms: {
    type: Number,
    min: [0, 'Bedrooms must be positive']
  },
  bathrooms: {
    type: Number,
    min: [0, 'Bathrooms must be positive']
  },
  area: {
    type: Number,
    min: [0, 'Area must be positive']
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
    validate: {
      validator: function(v) {
        return /^[0-9]{10}$/.test(v); // 10 digit number validation
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    trim: true
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add index for better search performance
propertySchema.index({ title: 'text', description: 'text', location: 'text' });

module.exports = mongoose.model('Property', propertySchema);