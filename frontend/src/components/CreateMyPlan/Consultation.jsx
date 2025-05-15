import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Schedule Your <span className="text-blue-600">Consultation</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-500">
            Speak with our real estate investment specialists
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
            <p className="text-green-600 text-sm sm:text-base">
              Your consultation request has been submitted. We'll contact you shortly.
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="p-5 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <FaUser className="mr-2 text-blue-500 text-sm" /> Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <FaEnvelope className="mr-2 text-blue-500 text-sm" /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Date */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <FaPhone className="mr-2 text-blue-500 text-sm" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <FaCalendarAlt className="mr-2 text-blue-500 text-sm" /> Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="time" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <FaComment className="mr-2 text-blue-500 text-sm" /> Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Tell us about your investment goals or specific questions..."
                  ></textarea>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 block text-xs sm:text-sm text-gray-700">
                    I agree to receive communications about my consultation
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center text-sm sm:text-base"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </form>
            </div>

            {/* Footer Info */}
            <div className="bg-gray-50 px-5 py-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                Need immediate assistance? Call us at{' '}
                <span className="font-medium">+1 (800) 123-4567</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Consultation;