import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-blue-600 text-2xl" />,
      title: "Our Office",
      info: "123 Real Estate Plaza, Financial District, Mumbai 400001",
    },
    {
      icon: <FaPhone className="text-blue-600 text-2xl" />,
      title: "Phone",
      info: "+91 98765 43210 (Sales)\n+91 87654 32109 (Support)",
    },
    {
      icon: <FaEnvelope className="text-blue-600 text-2xl" />,
      title: "Email",
      info: "sales@propertypro.com\nsupport@propertypro.com",
    },
    {
      icon: <FaClock className="text-blue-600 text-2xl" />,
      title: "Working Hours",
      info: "Monday - Friday: 9:00 AM - 7:00 PM\nSaturday: 10:00 AM - 4:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-600">Our Team</span>
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about properties or investments? Reach out to our expert team for personalized assistance.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>

            {contactInfo.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start">
                <div className="mr-4 mt-1 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">{item.info}</p>
                </div>
              </div>
            ))}

            {/* Map Embed */}
            <div className="mt-6 w-full overflow-hidden rounded-lg shadow-md">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb= !1m18!1m12!1m3!1d3771.715431807882!2d72.8248573153775!3d19.0523662580007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96a34dc4401%3A0x3ffc07e83942b9f3!2sMumbai%20Real%20Estate%20Plaza!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-600">Your message has been sent. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="property-inquiry">Property Inquiry</option>
                    <option value="investment-consultation">Investment Consultation</option>
                    <option value="general-question">General Question</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" /> Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;