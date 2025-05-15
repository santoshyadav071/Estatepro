import React from "react";
import properties from "../data/propertyData.json"; // JSON file import kiya
import ReactApexChart from "react-apexcharts";

const PManagement = () => {
  // Existing Sales Data (still available if needed)
  const salesData = [
    { month: "Jan", plots: 12, revenue: "2.1" },
    { month: "Feb", plots: 18, revenue: "3.2" },
    { month: "Mar", plots: 15, revenue: "2.8" },
    { month: "Apr", plots: 22, revenue: "4.0" },
    { month: "May", plots: 19, revenue: "3.5" },
    { month: "Jun", plots: 25, revenue: "4.7" },
    { month: "Jul", plots: 30, revenue: "5.8" },
    { month: "Aug", plots: 28, revenue: "5.2" },
    { month: "Sep", plots: 20, revenue: "3.9" },
    { month: "Oct", plots: 24, revenue: "4.5" },
    { month: "Nov", plots: 32, revenue: "6.2" },
    { month: "Dec", plots: 40, revenue: "7.5" },
  ];

  // Candlestick Chart Series
  const candlestickSeries = [
    {
      name: "Property Price Movement",
      type: "candlestick",
      data: [
        { x: "Jan", y: [85, 92, 80, 90] },   // [Open, High, Low, Close]
        { x: "Feb", y: [90, 97, 85, 88] },
        { x: "Mar", y: [88, 95, 83, 93] },
        { x: "Apr", y: [93, 98, 89, 91] },
        { x: "May", y: [91, 99, 87, 96] },
        { x: "Jun", y: [96, 102, 90, 94] },
        { x: "Jul", y: [94, 100, 88, 99] },
        { x: "Aug", y: [99, 105, 95, 103] },
        { x: "Sep", y: [103, 107, 100, 101] },
        { x: "Oct", y: [101, 106, 98, 104] },
        { x: "Nov", y: [104, 110, 102, 108] },
        { x: "Dec", y: [108, 115, 105, 112] },
      ],
    },
  ];

  // Candlestick Chart Options
  const candlestickOptions = {
    chart: {
      type: "candlestick",
      height: 400,
      zoom: {
        enabled: true,
      },
    },
    title: {
      text: "Monthly Property Price Movement",
      align: "left",
    },
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      labels: {
        style: {
          colors: "#333",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#333",
        },
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#28a745",   // Green for up
          downward: "#dc3545", // Red for down
        },
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">🏡 EasyEstate Manager</h1>

      {/* Featured Properties Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-1">
                  <strong>Location:</strong> {property.location}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Price:</strong> {property.price}
                </p>
                <p className="text-gray-600 mb-3">
                  <strong>Best For:</strong> {property.bestFor}
                </p>
                <p className="mb-4">{property.description}</p>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Contact our team - EasyEstate@gmail.com
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sales Data Candlestick Chart Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Monthly Revenue Trend (Candlestick View)</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg">
          <ReactApexChart options={candlestickOptions} series={candlestickSeries} type="candlestick" height={400} />
        </div>
      </section>
    </div>
  );
};

export default PManagement;