import { useState } from 'react';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaTrash,
  FaPhone,
  FaHeart,
  FaShareAlt,
} from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const PropertyCard = ({ property }) => {
  const [expanded, setExpanded] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Handle save/unsave property
  const handleSave = () => {
    setSaved(!saved);
  };

  // Copy link to clipboard
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  // Confirm delete request via modal
  const confirmDeleteRequest = () => {
    setShowDeleteModal(true);
  };

  const submitDeleteRequest = () => {
    setShowDeleteModal(false);
    alert('✅ Your deletion request has been sent. It will be processed within 24 hours.');
    // Optional: Send API request here
    // axios.post('/api/request-delete', { propertyId: property._id });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Image Section */}
      <div className="relative h-56 w-full">
        <img
          src={property.image || '/placeholder-property.jpg'}
          alt={property.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/placeholder-property.jpg';
          }}
        />
        {/* Property Type Badge */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            property.propertyType === 'Rent'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-green-100 text-green-800'
          }`}
        >
          {property.propertyType}
        </div>
        {/* Action Buttons */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <button
            onClick={handleSave}
            className={`p-2 rounded-full ${
              saved ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
            } shadow-md`}
            title={saved ? 'Remove from saved' : 'Save property'}
          >
            <FaHeart className={saved ? 'fill-current' : ''} />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white text-gray-700 shadow-md"
            title="Share property"
          >
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-800 truncate">{property.title}</h2>
          <p className="text-lg font-bold text-green-600">₹{property.price?.toLocaleString('en-IN')}</p>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <FaMapMarkerAlt className="mr-2 text-gray-400" />
          <p className="text-sm truncate">{property.location}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
          {property.bedrooms && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <FaBed className="mr-2 text-blue-500" /> {property.bedrooms} Beds
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <FaBath className="mr-2 text-blue-500" /> {property.bathrooms} Baths
            </div>
          )}
          {property.area && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <FaRulerCombined className="mr-2 text-blue-500" /> {property.area} sq.ft
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

        {/* Contact Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg text-gray-700 font-medium mb-2"
        >
          <span>Contact Information</span>
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>

        {/* Expandable Contact Info */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-700 mb-2">
              <FaPhone className="mr-3 text-blue-500" />
              <div>
                <p className="font-semibold">Contact Number</p>
                <p className="text-blue-600 font-medium">
                  {property.contactNumber || 'Not provided'}
                </p>
              </div>
            </div>
            <button className="w-full mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Call Now
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4">
          <button
            onClick={confirmDeleteRequest}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <FaTrash /> Delete
          </button>
        </div>
      </div>

      {/* Custom Modal for Delete Confirmation */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-fadeIn">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Confirm Deletion Request</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to request deletion of this property listing? The admin will review your request.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={submitDeleteRequest}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PropertyCard;