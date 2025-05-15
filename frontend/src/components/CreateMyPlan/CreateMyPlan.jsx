import { useState } from 'react';
import { FaHome, FaChartLine, FaMapMarkerAlt, FaUserTie, FaArrowRight } from 'react-icons/fa';
import InvestmentPlanDisplay from './InvestmentPlanDisplay';
import { generateInvestmentPlan } from './planLogic';
import { Link } from 'react-router-dom';

const CreateMyPlan = () => {
  const planningSteps = [
    {
      id: 1,
      title: "Financial Assessment",
      description: "We analyze your current financial situation and investment capacity",
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
    },
    {
      id: 2,
      title: "Goal Definition",
      description: "Identify your short-term and long-term real estate investment objectives",
      icon: <FaHome className="text-blue-600 text-2xl" />,
    },
    {
      id: 3,
      title: "Risk Profile",
      description: "Determine your risk tolerance and preferred investment strategies",
      icon: <FaMapMarkerAlt className="text-blue-600 text-2xl" />,
    },
    {
      id: 4,
      title: "Personalized Plan",
      description: "Receive your customized property investment roadmap",
      icon: <FaUserTie className="text-blue-600 text-2xl" />,
    },
  ];

  const investmentTypes = [
    { id: 'residential', name: 'Residential Properties', description: 'Apartments, villas, townhouses' },
    { id: 'commercial', name: 'Commercial Real Estate', description: 'Office spaces, retail, warehouses' },
    { id: 'land', name: 'Land Banking', description: 'Strategic land acquisitions' },
    { id: 'reits', name: 'REITs', description: 'Real Estate Investment Trusts' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    budget: '',
    horizon: '',
    residential: false,
    commercial: false,
    land: false,
    reits: false,
    goals: '',
    consent: false,
  });

  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const plan = generateInvestmentPlan(formData);
      setGeneratedPlan(plan);
      setIsLoading(false);
      document.getElementById('plan-display').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  if (generatedPlan) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <InvestmentPlanDisplay plan={generatedPlan} />
        <div className="max-w-xl mx-auto mt-10">
          <button
            onClick={() => setGeneratedPlan(null)}
            className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg"
          >
            Create Another Plan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins px-4 py-6">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 px-6 rounded-b-3xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Create Your Investment Plan</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Get a customized property investment strategy tailored to your financial goals
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our 4-step process to create your perfect property investment plan
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {planningSteps.map((step) => (
              <div key={step.id} className="text-center p-4">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Creation Form */}
      <section className="py-12 bg-gray-50" id="plan-display">
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-700 text-white py-4 px-6">
              <h2 className="text-xl sm:text-2xl font-bold">Investment Profile</h2>
              <p className="text-blue-100 text-sm sm:text-base">Tell us about your investment goals</p>
            </div>
            <form className="p-6 space-y-6" onSubmit={handleSubmit}>
              {/* Basic Info */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">1. Basic Information</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="Current City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Financial Details */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">2. Financial Details</h3>
                <div className="space-y-4">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Budget Range (₹)</option>
                    <option value="50-100">50L - 1Cr</option>
                    <option value="100-250">1Cr - 2.5Cr</option>
                    <option value="250-500">2.5Cr - 5Cr</option>
                    <option value="500+">5Cr+</option>
                  </select>
                  <select
                    name="horizon"
                    value={formData.horizon}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Time Frame</option>
                    <option value="short">1-3 years</option>
                    <option value="medium">3-5 years</option>
                    <option value="long">5+ years</option>
                  </select>
                </div>
              </div>

              {/* Preferences */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">3. Investment Preferences</h3>
                <div className="space-y-3">
                  {investmentTypes.map((type) => (
                    <div key={type.id} className="flex flex-col sm:flex-row items-start">
                      <input
                        type="checkbox"
                        id={type.id}
                        name={type.id}
                        checked={formData[type.id]}
                        onChange={handleChange}
                        className="mt-1 mr-3 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={type.id} className="text-gray-700">
                        <span className="font-medium">{type.name}</span> <br />
                        <small className="text-gray-500">{type.description}</small>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">4. Additional Information</h3>
                <textarea
                  rows="4"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  placeholder="Tell us about your specific investment objectives..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Consent */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-3 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="consent" className="text-gray-700 text-sm sm:text-base">
                  I agree to receive investment recommendations and market updates
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Generating Your Plan...
                    </>
                  ) : (
                    <>
                      Generate My Plan <FaArrowRight className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 sm:p-8 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Expert Guidance?</h2>
            <p className="text-sm sm:text-lg mb-6 max-w-xs mx-auto">
              Schedule a one-on-one consultation with our property investment specialists
            </p>
            <Link to="/consultation">
              <button className="w-full sm:w-auto bg-white text-blue-800 font-bold py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
                Book Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateMyPlan;