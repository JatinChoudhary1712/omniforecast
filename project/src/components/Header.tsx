import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-semibold text-blue-600">OmniForecast</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            {paths.length > 0 && (
              <div className="flex items-center text-sm text-gray-500">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                {paths.map((path, index) => (
                  <React.Fragment key={path}>
                    <span className="mx-2">/</span>
                    <span className={index === paths.length - 1 ? 'text-gray-900' : ''}>
                      {path.charAt(0).toUpperCase() + path.slice(1)}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;