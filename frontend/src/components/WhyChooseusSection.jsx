import React from "react";
import { FaUserTie, FaRegLightbulb, FaChartLine, FaHeadset, FaShieldAlt, FaRocket } from "react-icons/fa";

const WhyChooseusSection = () => {
  return (
    <section className="mb-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">🌟 Why Choose Us?</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 text-blue-600 mb-3">
            <FaUserTie size={24} />
            <h3 className="text-lg font-semibold">Expert Management</h3>
          </div>
          <p className="text-gray-600">
            Our team of professionals ensures seamless and efficient property management for every client.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-500 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 text-green-600 mb-3">
            <FaRegLightbulb size={24} />
            <h3 className="text-lg font-semibold">Transparent Process</h3>
          </div>
          <p className="text-gray-600">
            We believe in complete transparency, providing real-time updates and clear communication.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 text-purple-600 mb-3">
            <FaChartLine size={24} />
            <h3 className="text-lg font-semibold">Best ROI</h3>
          </div>
          <p className="text-gray-600">
            We help you maximize returns by optimizing property performance and minimizing costs.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-yellow-500 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 text-yellow-600 mb-3">
            <FaHeadset size={24} />
            <h3 className="text-lg font-semibold">24x7 Customer Support</h3>
          </div>
          <p className="text-gray-600">
            Round-the-clock support to address your queries and concerns instantly.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-red-500 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 text-red-600 mb-3">
            <FaShieldAlt size={24} />
            <h3 className="text-lg font-semibold">Verified Properties</h3>
          </div>
          <p className="text-gray-600">
            All listings are verified to ensure authenticity and safety for our clients.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-teal-500 transform hover:-translate-y-1">
          <div className="flex items-center gap-3 text-teal-600 mb-3">
            <FaRocket size={24} />
            <h3 className="text-lg font-semibold">Fast Booking Process</h3>
          </div>
          <p className="text-gray-600">
            Book your dream property quickly and effortlessly with our simple booking system.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseusSection;