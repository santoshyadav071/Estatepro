import { FaChartLine, FaHome, FaMapMarkedAlt, FaUserTie, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { investmentOptions, marketTrends, experts } from '../data/investmentData.json';
import { Link } from 'react-router-dom';

const Advice1 = () => {
  // Icon mapping for investment options
  const iconComponents = {
    FaHome: FaHome,
    FaChartLine: FaChartLine,
    FaMapMarkedAlt: FaMapMarkedAlt
  };

  // Chart data
  const priceTrendData = [
    { name: 'Jan', bangalore: 65, mumbai: 90, hyderabad: 45, pune: 50 },
    { name: 'Apr', bangalore: 70, mumbai: 95, hyderabad: 50, pune: 55 },
    { name: 'Jul', bangalore: 75, mumbai: 98, hyderabad: 58, pune: 60 },
    { name: 'Oct', bangalore: 80, mumbai: 100, hyderabad: 65, pune: 68 }
  ];

  const rentalYieldData = marketTrends.map(city => ({
    name: city.city,
    yield: parseFloat(city.rentalYield),
    growth: parseFloat(city.yoyGrowth)
  }));

  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Property Investment Advisory</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Data-driven real estate investment solutions tailored to maximize your returns
          </p>
          <div className="flex justify-center gap-4">
          <Link to="/plane">
            <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300">
              Get Personalized Plan
            </button>
            </Link>
            <Link to="/plane">
            <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300">
              Explore Opportunities
            </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Property Investment Options */}
      <section id="strategies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Investment Strategies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven investment frameworks deliver consistent returns across market cycles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {investmentOptions.map(option => {
              const IconComponent = iconComponents[option.icon];
              return (
                <div key={option.id} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition duration-300">
                      <IconComponent className="text-3xl text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{option.title}</h3>
                  <p className="text-gray-600 text-center mb-5">{option.description}</p>
                  <ul className="space-y-3">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaArrowUp className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section id="market-trends" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Market Intelligence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Data-backed insights to inform your investment decisions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-6">Price Trends (Indexed)</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceTrendData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="bangalore" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="mumbai" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="hyderabad" stroke="#ffc658" strokeWidth={2} />
                    <Line type="monotone" dataKey="pune" stroke="#ff8042" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-6">Rental Yield & Growth</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={rentalYieldData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="yield" fill="#8884d8" name="Rental Yield (%)" />
                    <Bar yAxisId="right" dataKey="growth" fill="#82ca9d" name="YoY Growth (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketTrends.map((trend, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="font-bold text-xl mb-3">{trend.city}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-500">YoY Growth</p>
                    <p className="text-green-600 font-semibold">{trend.yoyGrowth}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Rental Yield</p>
                    <p className="font-semibold">{trend.rentalYield}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Price Range</p>
                    <p className="font-semibold">{trend.priceRange}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section id="experts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Investment Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seasoned professionals with deep market expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {experts.map(expert => (
              <div key={expert.id} className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold">{expert.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{expert.title}</p>
                  <p className="text-gray-600 mb-3">{expert.experience}</p>
                  <p className="mb-4"><span className="font-semibold">Specialty:</span> {expert.specialty}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a 
                      href={`tel:${expert.phone}`}
                      className="flex items-center justify-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
                    >
                      <FaPhoneAlt /> Call
                    </a>
                    <a 
                      href={`mailto:${expert.contact}`}
                      className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    >
                      <FaUserTie /> Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Property Portfolio?</h2>
          <p className="text-xl mb-8">
            Schedule a consultation with our experts to create your personalized investment strategy
          </p>
          <Link to="/consultation">
          <button className="bg-white text-blue-800 font-bold px-8 py-4 rounded-lg hover:bg-blue-100 transition duration-300 shadow-lg">
            Get Started Today
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Advice1;