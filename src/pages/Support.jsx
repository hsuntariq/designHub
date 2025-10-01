// pages/Support.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Support = () => {
  const [activeCategory, setActiveCategory] = useState("getting-started");

  const supportCategories = {
    "getting-started": {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        {
          title: "How to use the Color Generator",
          description:
            "Learn how to create beautiful color palettes for your projects",
          link: "/documentation#color-generator",
        },
        {
          title: "Typography Scale Basics",
          description: "Understanding modular scales and typography hierarchy",
          link: "/documentation#typography-guide",
        },
        {
          title: "Creating Your First Design System",
          description:
            "Step-by-step guide to building a complete design system",
          link: "/documentation#design-system",
        },
      ],
    },
    troubleshooting: {
      title: "Troubleshooting",
      icon: "🔧",
      articles: [
        {
          title: "Common Color Generator Issues",
          description:
            "Solutions for frequent problems with color palette generation",
          link: "/documentation",
        },
        {
          title: "Export Problems",
          description: "Troubleshooting CSS and code export issues",
          link: "/documentation",
        },
        {
          title: "Browser Compatibility",
          description: "Supported browsers and known compatibility issues",
          link: "/documentation",
        },
      ],
    },
    "best-practices": {
      title: "Best Practices",
      icon: "⭐",
      articles: [
        {
          title: "Color Accessibility Guidelines",
          description:
            "Ensuring your color choices are accessible to all users",
          link: "/documentation",
        },
        {
          title: "Responsive Design Tips",
          description: "Creating designs that work on all devices",
          link: "/documentation#responsive-design",
        },
        {
          title: "Performance Optimization",
          description: "Best practices for fast-loading designs",
          link: "/documentation",
        },
      ],
    },
  };

  const popularArticles = [
    {
      title: "Color Contrast Ratio Calculator Guide",
      description: "Learn how to ensure accessible color combinations",
      reads: "12.4K",
      category: "accessibility",
    },
    {
      title: "Creating Perfect Typography Scales",
      description: "Mathematical ratios for beautiful text hierarchies",
      reads: "8.7K",
      category: "typography",
    },
    {
      title: "CSS Grid Layout Builder Tutorial",
      description: "Master complex layouts with our visual builder",
      reads: "6.3K",
      category: "layout",
    },
    {
      title: "Design System Token Management",
      description: "Organize and maintain your design tokens effectively",
      reads: "5.9K",
      category: "system",
    },
  ];

  const contactOptions = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help via email",
      response: "Within 24 hours",
      action: "Send Email",
      link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hsuntariq@gmail.com",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Instant help from our team",
      response: "Immediate",
      action: "Start Chat",
      link: "https://api.whatsapp.com/send/?phone=%2B923151248441&text&type=phone_number&app_absent=0",
    },
    {
      icon: "📞",
      title: "Schedule Call",
      description: "Book a 1:1 session",
      response: "By appointment",
      action: "Book Now",
      link: "https://calendly.com/hsuntariq/30min",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get help with our design tools. Find answers, guides, and contact
            options.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-purple-600">
            Home
          </Link>
          <span>›</span>
          <span>Support</span>
        </div>

        {/* Quick Help */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Need Immediate Help?
              </h2>
              <p className="text-purple-100 text-lg mb-4">
                Our documentation has answers to most common questions. Check it
                out before contacting support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/documentation"
                  className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  📚 Browse Documentation
                </Link>
                <a
                  href="#contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 text-center"
                >
                  💬 Contact Support
                </a>
              </div>
            </div>
            <div className="text-6xl">🛠️</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Support Categories */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Help Categories
            </h2>

            <div className="space-y-6">
              {Object.entries(supportCategories).map(([key, category]) => (
                <div key={key} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.articles.map((article, index) => (
                      <Link
                        key={index}
                        to={article.link}
                        className="block p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {article.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {article.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Popular Articles */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Popular Help Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {popularArticles.map((article, index) => (
                  <Link
                    key={index}
                    to="/documentation"
                    className="p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        👁️ {article.reads}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {article.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="lg:col-span-1">
            <div
              id="contact"
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Support
              </h2>

              <div className="space-y-4">
                {contactOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.link}
                    className="block p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{option.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {option.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {option.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">
                            Response: {option.response}
                          </span>
                          <span className="text-purple-600 text-sm font-semibold">
                            {option.action}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Support Status */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    Support Status
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-semibold ${(() => {
                        const now = new Date();
                        const hour = now.getHours(); // 0–23

                        if (hour >= 9 && hour < 18) {
                          // Online
                          return "bg-green-100 text-green-800";
                        } else {
                          // Offline
                          return "bg-gray-200 text-gray-700";
                        }
                      })()}`}
                    >
                      {(() => {
                        const now = new Date();
                        const hour = now.getHours();

                        return hour >= 9 && hour < 18 ? "Online" : "Offline";
                      })()}
                    </span>
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Our support team is currently available and responding to
                  inquiries.
                </p>
              </div>

              {/* Quick Links */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <Link
                    to="/documentation"
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 text-sm"
                  >
                    <span>📖</span>
                    <span>Documentation</span>
                  </Link>
                  <Link
                    to="/all-tools"
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 text-sm"
                  >
                    <span>🛠️</span>
                    <span>All Tools</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 text-sm"
                  >
                    <span>📧</span>
                    <span>Contact Form</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
