import React, { useState } from "react";

const ComponentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("buttons");

  const components = {
    buttons: [
      {
        name: "Primary Button",
        code: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Primary Button
</button>`,
      },
      {
        name: "Secondary Button",
        code: `<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Secondary Button
</button>`,
      },
      {
        name: "Gradient Button",
        code: `<button class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5">
  Gradient Button
</button>`,
      },
    ],
    cards: [
      {
        name: "Basic Card",
        code: `<div class="bg-white rounded-xl shadow-lg p-6 max-w-sm">
  <h3 class="text-xl font-bold text-gray-900 mb-2">Card Title</h3>
  <p class="text-gray-600 mb-4">This is a basic card component with some sample text.</p>
  <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
    Learn More
  </button>
</div>`,
      },
      {
        name: "Profile Card",
        code: `<div class="bg-white rounded-xl shadow-lg p-6 max-w-sm text-center">
  <img class="w-24 h-24 rounded-full mx-auto mb-4" src="/api/placeholder/96/96" alt="Profile" />
  <h3 class="text-xl font-bold text-gray-900 mb-1">John Doe</h3>
  <p class="text-gray-600 mb-4">Software Developer</p>
  <div class="flex justify-center space-x-3">
    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
      Follow
    </button>
    <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
      Message
    </button>
  </div>
</div>`,
      },
    ],
    forms: [
      {
        name: "Login Form",
        code: `<div class="bg-white rounded-xl shadow-lg p-6 max-w-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Login</h2>
  <form class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Enter your email" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
      <input type="password" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Enter your password" />
    </div>
    <button type="submit" class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
      Sign In
    </button>
  </form>
</div>`,
      },
    ],
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            UI Component Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready-to-use UI components built with Tailwind CSS. Copy and paste
            directly into your projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 max-w-2xl mx-auto">
          <div className="flex space-x-2">
            {Object.keys(components).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {components[activeCategory].map((component, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Component Preview */}
              <div className="p-8 border-b border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                <div
                  className="flex items-center justify-center min-h-48"
                  dangerouslySetInnerHTML={{ __html: component.code }}
                />
              </div>

              {/* Component Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {component.name}
                  </h3>
                  <button
                    onClick={() => copyCode(component.code)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold"
                  >
                    Copy Code
                  </button>
                </div>

                {/* Code Preview */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-gray-200 text-sm overflow-x-auto">
                    <code>{component.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
          {[
            {
              icon: "📋",
              title: "Copy & Paste",
              description: "Ready-to-use code for your projects",
            },
            {
              icon: "🎨",
              title: "Tailwind CSS",
              description: "Built with utility-first CSS framework",
            },
            {
              icon: "⚡",
              title: "Fully Responsive",
              description: "Works perfectly on all devices",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
