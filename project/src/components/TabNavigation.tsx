import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabNavigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { path: '/diamond', label: 'Diamond' },
    { path: '/diabetes', label: 'Diabetes' },
    { path: '/house', label: 'House' },
    { path: '/customer', label: 'Customer' },
    { path: '/credit-card', label: 'Credit Card' },
    { path: '/student', label: 'Student' }
  ];

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-4 overflow-x-auto">
          {tabs.map(tab => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium ${
                currentPath === tab.path
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation; 