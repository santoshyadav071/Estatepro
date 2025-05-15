import {
  FaChartLine,
  FaHome,
  FaMapMarkedAlt,
  FaUserTie,
  FaPhoneAlt,
  FaArrowUp,
  FaSearch,
  FaClipboardList,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Plane = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
      {/* Personalized Plan & Opportunities Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Tailored Solutions For You</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto">
              Discover investment opportunities matched to your unique financial profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Personalized Plan Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 sm:p-8 rounded-xl shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2.5 sm:p-3 bg-white bg-opacity-20 rounded-full mr-3">
                    <FaClipboardList className="text-xl sm:text-2xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Get Your Personalized Plan
                  </h3>
                </div>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base text-blue-100">
                  Our proprietary algorithm analyzes your financial goals, risk appetite, and market conditions to create a customized property investment roadmap.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaArrowUp className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Risk assessment & portfolio allocation</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowUp className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Location-specific recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowUp className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Financial projections & ROI analysis</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowUp className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Tax optimization strategies</span>
                  </li>
                </ul>
              </div>
              <button className="w-full bg-white text-blue-800 font-bold py-2.5 sm:py-3 px-5 rounded-lg hover:bg-blue-100 transition duration-300 text-sm sm:text-base">
                <Link to="/createmyplan" className="block w-full h-full">
                  Create My Plan
                </Link>
              </button>
            </div>

            {/* Explore Opportunities Card */}
            <div className="bg-white border border-blue-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 h-full">
              <div className="flex items-center mb-4">
                <div className="p-2.5 sm:p-3 bg-blue-100 rounded-full mr-3">
                  <FaSearch className="text-xl sm:text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Explore Opportunities
                </h3>
              </div>
              <p className="mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base">
                Access our curated selection of high-potential properties across all budget ranges and investment horizons.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6">
                <li className="flex items-start">
                  <FaArrowUp className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Pre-vetted residential & commercial properties</span>
                </li>
                <li className="flex items-start">
                  <FaArrowUp className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Emerging market hotspots</span>
                </li>
                <li className="flex items-start">
                  <FaArrowUp className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">REITs and fractional ownership options</span>
                </li>
                <li className="flex items-start">
                  <FaArrowUp className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Exclusive pre-launch opportunities</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white font-bold py-2.5 sm:py-3 px-5 rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
                Browse Properties
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plane;