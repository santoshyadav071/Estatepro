import React from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    location: "Delhi",
    role: "Property Owner",
    rating: 5,
    comment:
      "EasyEstate ne meri flat ki rent management bilkul seamless banadi. Har step clear tha.",
    avatar: "https://i.pravatar.cc/150?img=1 ",
  },
  {
    name: "Priya Rao",
    location: "Bangalore",
    role: "Tenant",
    rating: 5,
    comment:
      "Bahut accha platform hai! Sab kuch jald se hua, communication bhi bahut acchi thi.",
    avatar: "https://i.pravatar.cc/150?img=2 ",
  },
  {
    name: "Rajesh Malhotra",
    location: "Mumbai",
    role: "Investor",
    rating: 4,
    comment:
      "Good service, ek chota issue tha lekin support team ne jald hi resolve kar diya.",
    avatar: "https://i.pravatar.cc/150?img=3 ",
  },
  {
    name: "Sneha Iyer",
    location: "Chennai",
    role: "Home Buyer",
    rating: 5,
    comment:
      "Sabse accha yeh hai ki property verification ekdam authentic hai. Kisi tarah ka fraud nahi.",
    avatar: "https://i.pravatar.cc/150?img=4 ",
  },
];

const Review = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          💬 Client Testimonials
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          What our clients say about us — trusted by thousands of property
          owners & renters.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.location}
                  </p>
                  {/* Rating Stars */}
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < testimonial.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default Review;
