import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaHome, FaCheck, FaFilePdf, FaCalendarAlt } from 'react-icons/fa';

const InvestmentPlanDisplay = ({ plan }) => {
  const planRef = useRef();

  const handleDownloadPdf = useReactToPrint({
    content: () => planRef.current,
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      @media print {
        .no-print {
          display: none !important;
        }
        .print-section {
          break-inside: avoid;
        }
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `,
    documentTitle: `Investment-Plan-${plan.personalInfo.name.replace(/\s+/g, '-')}`,
  });

  return (
    <div className="max-w-4xl mx-auto">
      {/* Download Button (won't appear in PDF) */}
      <div className="no-print flex justify-end mb-4">
        <button
          onClick={handleDownloadPdf}
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg flex items-center"
        >
          <FaFilePdf className="mr-2" /> Download PDF
        </button>
      </div>

      {/* Plan Content (will appear in PDF) */}
      <div ref={planRef} className="bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-10 print-section">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Your Personalized Investment Plan</h2>
          <p className="text-gray-600">Generated on {new Date().toLocaleDateString()}</p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Investor Profile Card */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 print-section">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Investor Profile</h3>
            <p className="mb-2"><span className="font-medium">Name:</span> {plan.personalInfo.name}</p>
            <p className="mb-2"><span className="font-medium">Email:</span> {plan.personalInfo.contact}</p>
            <p><span className="font-medium">Location:</span> {plan.personalInfo.location}</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Financial Snapshot</h3>
            <p className="mb-2"><span className="font-medium">Budget:</span> ₹{plan.financialProfile.budget}</p>
            <p className="mb-2"><span className="font-medium">Time Horizon:</span> {plan.financialProfile.timeHorizon}</p>
            <p><span className="font-medium">Risk Tolerance:</span> {plan.financialProfile.riskTolerance}</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Key Strategy</h3>
            <p>{plan.strategy}</p>
          </div>
        </div>

        {/* Recommended Allocation */}
        <div className="mb-12 print-section">
          <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">Recommended Allocation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {plan.recommendedAllocation.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FaCheck className="text-blue-700" />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Property Recommendations */}
        <div className="mb-12 print-section">
          <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">Property Recommendations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {plan.propertyRecommendations.map((property, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition print:shadow-none">
                <div className="flex items-center mb-2">
                  <FaHome className="text-blue-600 text-xl mr-2" />
                  <h4 className="font-semibold">{property}</h4>
                </div>
                <p className="text-sm text-gray-600">Recommended for your profile</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Plan Timeline */}
        <div className="mb-12 print-section">
          <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">Action Plan Timeline</h3>
          <div className="space-y-8">
            {plan.timeline.map((item, index) => (
              <div key={index} className="flex">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-6 flex-shrink-0 print:bg-blue-700">
                  {item.month}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Month {item.month}</h4>
                  <p className="text-gray-600">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Steps */}
        <div className="mb-12 print-section">
          <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">Action Steps</h3>
          <div className="space-y-4">
            {plan.actionSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0 print:bg-blue-200">
                  {index + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps (won't appear in PDF) */}
        <div className="mt-12 bg-yellow-50 p-6 rounded-lg border border-yellow-200 no-print">
          <h3 className="text-xl font-semibold mb-4 text-yellow-800">Next Steps</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleDownloadPdf}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
            >
              <FaFilePdf className="mr-2" /> Download PDF Plan
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center">
              <FaCalendarAlt className="mr-2" /> Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlanDisplay;