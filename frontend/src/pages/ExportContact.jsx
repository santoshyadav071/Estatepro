import React, { useState } from 'react';
import { FiDownload, FiFileText, FiFile, FiUsers, FiHome } from 'react-icons/fi';
import contacts from '../data/contacts.json'; // Import contacts from JSON file
import jsPDF from 'jspdf'; // For PDF export
import 'jspdf-autotable'; // For table in PDF
import * as XLSX from 'xlsx'; // For Excel export

const ExportContact = () => {
  const [exporting, setExporting] = useState(null); // Tracks the format being exported

  const handleExport = (format) => {
    setExporting(format);

    if (format === 'CSV') {
      const csvContent = [
        ['Name', 'Email', 'Phone', 'Property', 'Status', 'Last Contact'],
        ...contacts.map(contact => [
          contact.name,
          contact.email,
          contact.phone,
          contact.property,
          contact.status,
          contact.lastContact
        ]),
      ]
        .map(row => row.map(cell => `"${cell}"`).join(','))
        .join('\r\n');

      const blob = new Blob(['\uFEFF', csvContent], {
        type: 'text/csv;charset=utf-8;',
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'real_estate_contacts.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (format === 'PDF') {
      const doc = new jsPDF();
      doc.text('Real Estate Contacts', 14, 10);

      doc.autoTable({
        head: [['Name', 'Email', 'Phone', 'Property', 'Status', 'Last Contact']],
        body: contacts.map(contact => [
          contact.name,
          contact.email,
          contact.phone,
          contact.property,
          contact.status,
          contact.lastContact,
        ]),
        styles: { fontSize: 9 },
        margin: { top: 20 },
      });

      doc.save('real_estate_contacts.pdf');
    } else if (format === 'Excel') {
      const worksheet = XLSX.utils.json_to_sheet(contacts);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
      XLSX.writeFile(workbook, 'real_estate_contacts.xlsx');
    } else {
      setTimeout(() => {
        alert(`Exporting contacts in ${format} format (Coming Soon)`);
      }, 1000);
    }

    setTimeout(() => setExporting(null), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <FiHome className="h-8 w-8 text-indigo-600" />
            <h2 className="ml-2 text-2xl font-bold text-gray-900">EstatePro</h2>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Export Client Contacts</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-md mx-auto">
            Manage and export your valuable real estate client information.
          </p>
        </div>

        {/* Contacts Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <div className="p-4 sm:p-6">
            <div className="flex items-center mb-4">
              <FiUsers className="h-5 w-5 text-indigo-500 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Your Contacts ({contacts.length})</h3>
            </div>

            {/* Mobile-friendly table wrapper */}
            <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Property
                    </th>
                    <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Contact
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contacts.map((contact, index) => (
                    <tr key={index} className={`hover:bg-indigo-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <img src={contact.profileImage} alt={`${contact.name}'s profile`} className="h-8 w-8 rounded-full object-cover" />
                          <div className="ml-2">
                            <div className="text-xs sm:text-sm font-medium text-gray-900">{contact.name}</div>
                            <div className="text-xs text-gray-500">{contact.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="text-xs sm:text-sm text-gray-900">{contact.property}</div>
                        <div className="text-xs text-gray-500">{contact.phone}</div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          contact.status === 'Interested'
                            ? 'bg-green-100 text-green-800'
                            : contact.status === 'Follow-up'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                        }`}>
                          {contact.status}
                        </span>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-500">
                        {contact.lastContact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Export Options */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3">Export Options</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <button
                  onClick={() => handleExport('PDF')}
                  disabled={exporting !== null}
                  className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {exporting === 'PDF' ? (
                    <span className="animate-pulse">Exporting...</span>
                  ) : (
                    <>
                      <FiFileText className="mr-1 sm:mr-2 h-4 w-4" />
                      <span>PDF</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleExport('Excel')}
                  disabled={exporting !== null}
                  className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {exporting === 'Excel' ? (
                    <span className="animate-pulse">Exporting...</span>
                  ) : (
                    <>
                      <FiFile className="mr-1 sm:mr-2 h-4 w-4" />
                      <span>Excel</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleExport('CSV')}
                  disabled={exporting !== null}
                  className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {exporting === 'CSV' ? (
                    <span className="animate-pulse">Exporting...</span>
                  ) : (
                    <>
                      <FiDownload className="mr-1 sm:mr-2 h-4 w-4" />
                      <span>CSV</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DreamHome Realty. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ExportContact;