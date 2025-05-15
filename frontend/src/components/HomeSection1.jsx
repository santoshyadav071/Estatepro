import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import { FiHome, FiLoader, FiAlertCircle, FiRefreshCw } from 'react-icons/fi';

const HomeSection1 = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await axios.get('https://estatepro-1.onrender.com/api/properties');
        // Handle both response formats: direct array or { data: array }
        const propertiesData = Array.isArray(data) ? data : (data.data || []);
        setProperties(propertiesData);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError('Failed to load properties. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleDelete = (id) => {
    setProperties((prev) => prev.filter((p) => p._id !== id));
  };

  // Safely filter properties
  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.propertyType?.toLowerCase() === filter.toLowerCase());

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Fetching Properties</h2>
          <p className="text-gray-600">Discovering your dream homes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all hover:scale-[1.01]">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-6">
            <FiAlertCircle className="text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Connection Issue</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all"
          >
            <FiRefreshCw className="animate-spin" />
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 bg-[url('/b.jpeg')] bg-cover bg-center bg-no-repeat">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/b.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-700/80"></div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Discover Your Perfect <span className="text-yellow-300">Home</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl">
              Explore premium properties across the city with modern amenities and stunning architecture
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-white text-blue-600 shadow-md' 
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              All Properties
            </button>
            <button 
              onClick={() => setFilter('rent')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'rent' 
                  ? 'bg-white text-blue-600 shadow-md' 
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              For Rent
            </button>
            <button 
              onClick={() => setFilter('sale')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'sale' 
                  ? 'bg-white text-blue-600 shadow-md' 
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              For Sale
            </button>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="container mx-auto px-4 -mt-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <div 
                key={property._id} 
                className="transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PropertyCard 
                  property={property} 
                  onDelete={handleDelete}
                  className="h-full"
                />
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <FiHome className="text-gray-400 text-6xl mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No Properties Found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filter criteria</p>
              <button 
                onClick={() => setFilter('all')}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 py-12 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Our team of expert real estate agents is ready to help you find your dream home. Get personalized recommendations today.
          </p>
          <Link 
            to="/exportcontact" 
            className="px-8 py-3 bg-yellow-400 text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;