// components/Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isToolsActive = () =>
    location.pathname.includes("/color-generator") ||
    location.pathname.includes("/css-gradient-generator") ||
    location.pathname.includes("/typography-scale") ||
    location.pathname.includes("/spacing-scale") ||
    location.pathname.includes("/component-showcase") ||
    location.pathname.includes("/design-system") ||
    location.pathname === "/all-tools";

  // Navigation structure with tools dropdown
  const navigation = [
    { path: "/", label: "Home", icon: "🏠" },
    {
      path: "#tools",
      label: "Design Tools",
      icon: "🛠️",
      isDropdown: true,
      items: [
        {
          path: "/color-generator",
          label: "Color Generator",
          icon: "🎨",
          description: "Create beautiful color palettes",
        },
        {
          path: "/css-gradient-generator",
          label: "Gradient Generator",
          icon: "🔄",
          description: "Design CSS gradients",
        },
        {
          path: "/typography-scale",
          label: "Typography Scale",
          icon: "🔤",
          description: "Perfect typography systems",
        },
        {
          path: "/spacing-scale-generator",
          label: "Spacing Scale",
          icon: "📐",
          description: "Consistent spacing systems",
        },
        {
          path: "/component-showcase",
          label: "UI Components",
          icon: "📱",
          description: "Ready-to-use components",
        },
        {
          path: "/design-system-builder",
          label: "Design System",
          icon: "🎯",
          description: "Complete design systems",
        },
        {
          path: "/all-tools",
          label: "All Tools",
          icon: "✨",
          description: "Explore all design tools",
          featured: true,
        },
      ],
    },
    { path: "/documentation", label: "Documentation", icon: "📚" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            aria-label="DesignHub - Home"
          >
            <div
              className="w-10 h-10 0 rounded-xl flex items-center justify-center  group-hover:scale-105 transition-transform duration-200"
              role="img"
              aria-label="DesignHub Logo"
            >
              <img
                className="text-white font-bold text-lg"
                src="/favicon.png"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                DesignHub
              </span>
              <span className="text-xs text-gray-500 -mt-1">Design Tools</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.path} className="relative">
                {item.isDropdown ? (
                  /* Tools Dropdown */
                  <div className="relative">
                    <button
                      onClick={() => setIsToolsOpen(!isToolsOpen)}
                      onMouseEnter={() => setIsToolsOpen(true)}
                      className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg inline-flex items-center space-x-2 group ${
                        isToolsActive()
                          ? "text-purple-700 bg-purple-50 border border-purple-200 shadow-sm"
                          : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isToolsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isToolsOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 py-3 backdrop-blur-md"
                        onMouseLeave={() => setIsToolsOpen(false)}
                      >
                        <div className="px-4 py-2 border-b border-gray-100">
                          <h3 className="font-semibold text-gray-900 text-sm">
                            Design Tools
                          </h3>
                          <p className="text-gray-500 text-xs">
                            Powerful tools for designers & developers
                          </p>
                        </div>

                        <div className="max-h-96 overflow-y-auto">
                          {item.items.map((tool) => (
                            <Link
                              key={tool.path}
                              to={tool.path}
                              onClick={() => setIsToolsOpen(false)}
                              className={`flex items-start space-x-3 px-4 py-3 transition-all duration-200 group ${
                                tool.featured
                                  ? "bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500"
                                  : "hover:bg-gray-50"
                              } ${
                                isActive(tool.path)
                                  ? "bg-purple-25 border-l-4 border-purple-500"
                                  : ""
                              }`}
                            >
                              <div
                                className={`text-lg mt-0.5 ${
                                  tool.featured ? "scale-110" : ""
                                }`}
                              >
                                {tool.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <span
                                    className={`font-medium text-sm ${
                                      tool.featured
                                        ? "text-purple-700"
                                        : "text-gray-900"
                                    }`}
                                  >
                                    {tool.label}
                                  </span>
                                  {tool.featured && (
                                    <span className="px-1.5 py-0.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full font-semibold">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-500 text-xs mt-0.5 truncate">
                                  {tool.description}
                                </p>
                              </div>
                              {isActive(tool.path) && (
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Regular Navigation Item */
                  <Link
                    to={item.path}
                    className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg inline-flex items-center space-x-2 relative group ${
                      isActive(item.path)
                        ? "text-purple-700"
                        : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>

                    {/* Unique Active Underline */}
                    {isActive(item.path) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4">
                        <div className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        <div className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-sm opacity-50 -mt-0.5"></div>
                      </div>
                    )}

                    {/* Hover Effect */}
                    {!isActive(item.path) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-200 group-hover:w-3/4"></div>
                    )}
                  </Link>
                )}
              </div>
            ))}

            {/* Get Started CTA */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Link
                to="/color-generator"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center space-x-2 shadow-md hover:shadow-purple-200"
                aria-label="Get started with DesignHub"
              >
                <span>🚀</span>
                <span>Get Started</span>
              </Link>
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link
              to="/all-tools"
              className={`px-3 py-2 font-medium transition-colors relative ${
                isActive("/all-tools")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              🛠️ Tools
              {isActive("/all-tools") && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4">
                  <div className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </div>
              )}
            </Link>
            <Link
              to="/documentation"
              className={`px-3 py-2 font-medium transition-colors relative ${
                isActive("/documentation")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              📚 Docs
              {isActive("/documentation") && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4">
                  <div className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </div>
              )}
            </Link>
            <Link
              to="/color-generator"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              Start
            </Link>
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.path}>
                  {item.isDropdown ? (
                    /* Mobile Tools Dropdown */
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsToolsOpen(!isToolsOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 font-medium transition-colors rounded-lg ${
                          isToolsActive()
                            ? "text-purple-700 bg-purple-50 border border-purple-200"
                            : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isToolsOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isToolsOpen && (
                        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                          {item.items.map((tool) => (
                            <Link
                              key={tool.path}
                              to={tool.path}
                              onClick={() => {
                                setIsOpen(false);
                                setIsToolsOpen(false);
                              }}
                              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                                isActive(tool.path)
                                  ? "text-purple-700 bg-purple-50 border border-purple-200"
                                  : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                              }`}
                            >
                              <span className="text-lg">{tool.icon}</span>
                              <div>
                                <div className="font-medium text-sm">
                                  {tool.label}
                                </div>
                                <div className="text-gray-500 text-xs">
                                  {tool.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Regular Mobile Item */
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-4 py-3 font-medium transition-colors rounded-lg ${
                        isActive(item.path)
                          ? "text-purple-700 bg-purple-50 border border-purple-200"
                          : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-3 mt-2 border-t border-gray-200">
                <Link
                  to="/color-generator"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-center block shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  🚀 Get Started
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
