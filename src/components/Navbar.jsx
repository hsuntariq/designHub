// components/Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // AdSense compliant navigation structure
  const navigation = [
    { path: "/", label: "Home" },
    { path: "/all-tools", label: "Design Tools" },
    { path: "/color-generator", label: "Color Generator" },
    { path: "/gradient-generator", label: "Gradient Generator" },
    { path: "/typography-scale", label: "Typography" },
    { path: "/documentation", label: "Documentation" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Clear brand identity */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            aria-label="DesignHub - Home"
          >
            <div
              className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-md"
              role="img"
              aria-label="DesignHub Logo"
            >
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                DesignHub
              </span>
              <span className="text-xs text-gray-500 -mt-1">Design Tools</span>
            </div>
          </Link>

          {/* Desktop Navigation - Clear hierarchy */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                  isActive(item.path)
                    ? "text-purple-700 bg-purple-50 border border-purple-200 shadow-sm"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}

            {/* Clear CTA that doesn't mimic ads */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Link
                to="/all-tools"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center space-x-2 shadow-md"
                aria-label="Explore all design tools"
              >
                <span>🛠️</span>
                <span>All Tools</span>
              </Link>
            </div>
          </div>

          {/* Tablet Navigation - Simplified */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link
              to="/all-tools"
              className={`px-3 py-2 font-medium transition-colors ${
                isActive("/all-tools")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Tools
            </Link>
            <Link
              to="/documentation"
              className={`px-3 py-2 font-medium transition-colors ${
                isActive("/documentation")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Docs
            </Link>
            <Link
              to="/color-generator"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              Start
            </Link>
          </div>

          {/* Mobile menu button - Accessible */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Navigation - Accessible and clear */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 font-medium transition-colors rounded-lg ${
                    isActive(item.path)
                      ? "text-purple-700 bg-purple-50 border border-purple-200"
                      : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-3 mt-2 border-t border-gray-200">
                <Link
                  to="/all-tools"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-center block shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  🛠️ Explore All Tools
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
