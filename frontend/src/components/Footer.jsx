import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Footer Top Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">EstatePro</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-xs">
              Your trusted partner in finding the perfect home or investment property.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, name: "Facebook" },
                { icon: <FaTwitter />, name: "Twitter" },
                { icon: <FaInstagram />, name: "Instagram" },
                { icon: <FaLinkedinIn />, name: "LinkedIn" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={`#${social.name.toLowerCase()}`}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center group"
                  aria-label={social.name}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors text-sm sm:text-base">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 pb-1 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "Properties", link: "/" },
                { name: "Agents", link: "/exportcontact" },
                { name: "About Us", link: "/about" },
                { name: "Contact", link: "/contactus" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 pb-1 border-b border-gray-700">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Buying Property", link: "/" },
                { name: "Selling Property", link: "/addproperty" },
                { name: "Rental Services", link: "/addproperty" },
                { name: "Property Management", link: "/propertymanagement" },
                { name: "Investment Advice", link: "/advise" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 pb-1 border-b border-gray-700">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">Subscribe for the latest updates</p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-white placeholder-gray-500 text-sm sm:text-base"
                  aria-label="Email address"
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-0 h-full px-3 sm:px-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-r-md"
                  aria-label="Subscribe"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. No spam ever!
              </p>
            </form>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left mb-4 sm:mb-0">
              © {new Date().getFullYear()} RealEst. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-500 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;