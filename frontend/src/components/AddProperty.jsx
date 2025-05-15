import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiUpload, FiLoader, FiAlertCircle, FiImage, FiHome, FiPhone } from 'react-icons/fi';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    image: '',
    propertyType: 'Sale',
    bedrooms: '',
    bathrooms: '',
    area: '',
    contactNumber: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'price' ||
        name === 'bedrooms' ||
        name === 'bathrooms' ||
        name === 'area' ||
        name === 'contactNumber'
          ? value.replace(/\D/g, '')
          : value
    }));

    if (name === 'image') {
      setPreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      await axios.post('http://localhost:5000/api/properties', {
        ...formData,
        price: parseInt(formData.price),
        bedrooms: parseInt(formData.bedrooms),
        bathrooms: parseInt(formData.bathrooms),
        area: parseInt(formData.area),
        contactNumber: formData.contactNumber
      });

      setMessage({ text: 'Property added successfully!', type: 'success' });
      setFormData({
        title: '',
        description: '',
        price: '',
        location: '',
        image: '',
        propertyType: 'Sale',
        bedrooms: '',
        bathrooms: '',
        area: '',
        contactNumber: ''
      });
      setPreview(null);
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error('Error adding property:', error);
      setMessage({
        text: error.response?.data?.message || 'Failed to add property. Please try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:py-12">
      <div className="max-w-xl mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 text-blue-600 mb-3">
            <FiHome className="text-2xl sm:text-3xl" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">List Your Property</h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-md mx-auto">
            Fill in the details below to add your property to our marketplace.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Progress Bar */}
          <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
            {/* Status Message */}
            {message.text && (
              <div
                className={`p-3 sm:p-4 rounded-lg flex items-start gap-2 ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-800 border-l-4 border-green-500'
                    : 'bg-red-50 text-red-800 border-l-4 border-red-500'
                }`}
              >
                {message.type === 'success' ? (
                  <FiAlertCircle className="text-green-500 mt-0.5" />
                ) : (
                  <FiAlertCircle className="text-red-500 mt-0.5" />
                )}
                <p className="text-sm sm:text-base">{message.text}</p>
              </div>
            )}

            {/* Image Preview */}
            <div className="relative h-40 sm:h-52 md:h-64 rounded-lg overflow-hidden bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
              {preview ? (
                <img src={preview} alt="Property preview" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <div className="text-center p-4">
                  <FiImage className="mx-auto text-gray-400 text-4xl sm:text-5xl mb-2" />
                  <p className="text-sm sm:text-base text-gray-500">Property Image Preview</p>
                </div>
              )}
            </div>

            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 border-b pb-1">Basic Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">Title*</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Beautiful 3-Bedroom Apartment"
                    className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">Property Type*</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm appearance-none"
                  >
                    <option value="Sale">For Sale</option>
                    <option value="Rent">For Rent</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Description*</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your property in detail..."
                  rows="3"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                  required
                />
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 border-b pb-1">Property Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">Price ($)*</label>
                  <div className="relative">
                    <span className="absolute left-2 top-2.5 text-gray-500">$</span>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="250000"
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">Location*</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">Bedrooms</label>
                  <input
                    type="text"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    placeholder="3"
                    className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">Bathrooms</label>
                  <input
                    type="text"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    placeholder="2"
                    className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">Area (sq ft)</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="1500"
                      className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    />
                    <span className="absolute right-2 top-2 text-gray-500 text-xs sm:text-sm">sq ft</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">Image URL</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="https://example.com/property-image.jpg "
                      className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setPreview(formData.image)}
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-blue-500 transition-colors"
                    >
                      <FiUpload className="text-sm sm:text-lg" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Contact Number Field */}
              <div className="space-y-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Contact Number</label>
                <div className="relative">
                  <span className="absolute left-2 top-2.5 text-gray-500">
                    <FiPhone />
                  </span>
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                    className="w-full pl-8 pr-3 py-2 sm:pl-10 sm:pr-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FiLoader className="animate-spin mr-2" /> Processing...
                  </>
                ) : (
                  'Submit Property'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Tips */}
        <div className="mt-6 text-center text-xs sm:text-sm text-gray-500">
          <p>Need help? Contact our support team or check our listing guidelines.</p>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;