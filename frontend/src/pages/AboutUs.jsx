import React from 'react';
import { FaHome, FaHandshake, FaChartLine, FaUsers, FaAward } from 'react-icons/fa';
import aboutData from '../data/aboutData.json';

const AboutUs = () => {
  // Icon mapping
  const iconComponents = {
    FaHome: <FaHome className="text-blue-600 text-2xl" />,
    FaAward: <FaAward className="text-blue-600 text-2xl" />,
    FaHandshake: <FaHandshake className="text-blue-600 text-2xl" />,
    FaUsers: <FaUsers className="text-blue-600 text-2xl" />,
    FaChartLine: <FaChartLine className="text-blue-600 text-2xl" />
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          About <span className="text-blue-600">{aboutData.companyInfo.name}</span>
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {aboutData.companyInfo.mission}
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">
              {aboutData.companyInfo.story.part1}
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              {aboutData.companyInfo.story.part2}
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80 "
              alt="Our office"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-50 rounded-xl p-6 sm:p-8 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {aboutData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">{iconComponents[stat.icon]}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {aboutData.companyInfo.values.map((value, index) => (
            <div key={index} className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              {iconComponents[value.icon]}
              <h3 className="text-lg sm:text-xl font-semibold mt-3 mb-2">{value.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Meet Our Leadership
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {aboutData.teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 text-sm sm:text-base mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm sm:text-base">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 rounded-xl p-6 sm:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {aboutData.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-5 sm:p-8 rounded-lg shadow-sm">
              <blockquote className="text-gray-600 italic mb-4 text-base sm:text-lg">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-semibold text-sm sm:text-base">{testimonial.author}</div>
              <div className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;