import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const navigate = useNavigate();

  // Check if user is logged in when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // Set the user from local storage
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null); // Clear the user from state
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏠</span>
            <h1 className="text-2xl font-bold text-indigo-700">EstatePro</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/addproperty"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              List Property
            </Link>
            <Link
              to="/propertymanagement"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              PropertyManagement
            </Link>
            <Link
              to="/advise"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              Investment Advice
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              AboutUs
            </Link>
            <Link
              to="/contactus"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </nav>

          {/* Auth Buttons / Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <span>Welcome, {user.name}!</span>
                  <button
                    onClick={handleLogout}
                    className="text-white bg-red-600 px-4 py-2 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="text-white bg-indigo-500 px-4 py-2 rounded"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="text-white bg-indigo-500 px-4 py-2 rounded"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/addproperty"
                  className="block text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  List Property
                </Link>
              </li>
              <li>
                <Link
                  to="/propertymanagement"
                  className="block text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PropertyManagement
                </Link>
              </li>
              <li>
                <Link
                  to="/advise"
                  className="block text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investment Advice
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AboutUs
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="block text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              {/* Auth Buttons for Mobile */}
              {!user && (
                <li className="flex flex-col space-y-2 pt-2">
                  <button
                    onClick={() => {
                      navigate("/login");
                      setIsMenuOpen(false);
                    }}
                    className="text-white bg-indigo-500 px-4 py-2 rounded"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/signup");
                      setIsMenuOpen(false);
                    }}
                    className="text-white bg-indigo-500 px-4 py-2 rounded"
                  >
                    Sign Up
                  </button>
                </li>
              )}
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-white bg-red-600 px-4 py-2 rounded"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;