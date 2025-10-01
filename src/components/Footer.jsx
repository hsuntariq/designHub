// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                DesignoHub
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Creating beautiful, functional designs with powerful tools for
              modern creators and developers.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                {
                  name: "Twitter",
                  icon: "🐦",
                  url: "http://www.x.com/hassan00",
                },
                {
                  name: "Instagram",
                  icon: "📷",
                  url: "http://www.x.com/ht0_0",
                },
                {
                  name: "GitHub",
                  icon: "💻",
                  url: "https://www.github.com/hsuntariq",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 text-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Tools Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Design Tools
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Color Generator", path: "/color-generator" },
                { name: "Gradient Generator", path: "/gradient-generator" },
                { name: "Typography Scale", path: "/typography-scale" },
                { name: "Spacing Scale", path: "/spacing-scale-generator" },
                { name: "UI Components", path: "/component-showcase" },
                { name: "All Tools", path: "/all-tools" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: "Documentation", path: "/documentation" },
                { name: "Design System", path: "/design-system-builder" },
                { name: "Support", path: "/support" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {[
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-of-service" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            {/* <div className="mt-6">
              <p className="text-sm text-gray-300 mb-3">
                Design tips & updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-white text-sm focus:outline-none focus:border-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-r-lg text-white text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                  Join
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* AdSense Banner Placement */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-4 max-w-4xl mx-auto">
              <div className="text-gray-400 text-sm mb-2">Advertisement</div>
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 text-lg mb-2">Ad Space</div>
                  <div className="text-gray-500 text-sm">
                    Google AdSense Banner (728x90 / 970x90)
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-xs mt-2">
                Ads help us keep this service free for designers worldwide
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} DesignoHub. All rights reserved.
            </div>

            {/* Additional Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>

            {/* Trust Seals */}
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span>🔒 Secure</span>
              <span>⭐ Trusted</span>
              <span>🚀 Fast</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile AdSense Placement */}
      <div className="lg:hidden bg-gray-800 py-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-gray-400 text-xs mb-1">Advertisement</div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded h-16 flex items-center justify-center">
              <div className="text-gray-400 text-sm">Mobile Ad (320x50)</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
