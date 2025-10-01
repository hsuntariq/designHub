import React, { useState } from "react";

const DesignSystemBuilder = () => {
  const [systemName, setSystemName] = useState("My Design System");
  const [primaryColor, setPrimaryColor] = useState("#3B82F6");
  const [fontFamily, setFontFamily] = useState("inter");
  const [borderRadius, setBorderRadius] = useState(8);
  const [spacingBase, setSpacingBase] = useState(8);

  const fonts = {
    inter: "'Inter', sans-serif",
    system: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    georgia: "Georgia, serif",
    mono: "'Roboto Mono', monospace",
  };

  const generateDesignSystem = () => {
    return `/* ${systemName} - Design System Tokens */

:root {
  /* Colors */
  --color-primary: ${primaryColor};
  --color-primary-dark: color-mix(in srgb, ${primaryColor} 90%, black);
  --color-primary-light: color-mix(in srgb, ${primaryColor} 90%, white);
  
  /* Typography */
  --font-family: ${fonts[fontFamily]};
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  
  /* Spacing */
  --space-1: ${spacingBase * 0.25}px;
  --space-2: ${spacingBase * 0.5}px;
  --space-3: ${spacingBase}px;
  --space-4: ${spacingBase * 1.5}px;
  --space-5: ${spacingBase * 2}px;
  --space-6: ${spacingBase * 3}px;
  
  /* Border Radius */
  --radius-sm: ${borderRadius * 0.5}px;
  --radius-base: ${borderRadius}px;
  --radius-lg: ${borderRadius * 1.5}px;
  --radius-xl: ${borderRadius * 2}px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

/* Component Styles */
.btn {
  font-family: var(--font-family);
  font-weight: 600;
  border-radius: var(--radius-base);
  padding: var(--space-3) var(--space-5);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-dark);
}

.card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-base);
}

/* Export for JavaScript */
export const designTokens = {
  colors: {
    primary: '${primaryColor}',
    primaryDark: color-mix(in srgb, ${primaryColor} 90%, black),
    primaryLight: color-mix(in srgb, ${primaryColor} 90%, white)
  },
  typography: {
    fontFamily: '${fonts[fontFamily]}',
    sizes: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem'
    }
  },
  spacing: {
    1: '${spacingBase * 0.25}px',
    2: '${spacingBase * 0.5}px',
    3: '${spacingBase}px',
    4: '${spacingBase * 1.5}px',
    5: '${spacingBase * 2}px',
    6: '${spacingBase * 3}px'
  },
  borderRadius: {
    sm: '${borderRadius * 0.5}px',
    base: '${borderRadius}px',
    lg: '${borderRadius * 1.5}px',
    xl: '${borderRadius * 2}px'
  }
};`;
  };

  const copySystem = () => {
    navigator.clipboard.writeText(generateDesignSystem());
  };

  const AdPlaceholder = () => (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6 text-center my-8">
      <div className="text-purple-600 text-sm font-semibold mb-2">
        ADVERTISEMENT
      </div>
      <div className="bg-white border-2 border-dashed border-purple-300 rounded-lg h-32 flex items-center justify-center">
        <div className="text-center">
          <div className="text-purple-400 text-lg mb-1">Google AdSense</div>
          <div className="text-gray-500 text-sm">Responsive Ad Unit</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Design System Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create complete design systems with custom tokens, components, and
            guidelines. Export ready-to-use CSS and JavaScript.
          </p>
        </div>

        <AdPlaceholder />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* System Name */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                System Details
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    System Name
                  </label>
                  <input
                    type="text"
                    value={systemName}
                    onChange={(e) => setSystemName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter system name"
                  />
                </div>

                {/* Primary Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Color
                  </label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-12 h-12 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                    />
                  </div>
                </div>

                {/* Font Family */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Font Family
                  </label>
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="inter">Inter</option>
                    <option value="system">System Font</option>
                    <option value="georgia">Georgia</option>
                    <option value="mono">Monospace</option>
                  </select>
                </div>

                {/* Border Radius */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Border Radius:{" "}
                    <span className="text-blue-600 font-semibold">
                      {borderRadius}px
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="16"
                    step="2"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>0px</span>
                    <span>8px</span>
                    <span>16px</span>
                  </div>
                </div>

                {/* Spacing Base */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Spacing Base:{" "}
                    <span className="text-green-600 font-semibold">
                      {spacingBase}px
                    </span>
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="16"
                    step="2"
                    value={spacingBase}
                    onChange={(e) => setSpacingBase(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>4px</span>
                    <span>8px</span>
                    <span>16px</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Export */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Export
              </h3>
              <button
                onClick={copySystem}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                📋 Copy Design System
              </button>
            </div>
          </div>

          {/* Preview & Output */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {systemName}
                </h2>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Design System
                </div>
              </div>

              {/* Live Preview */}
              <div
                className="mb-8 p-6 border border-gray-200 rounded-xl"
                style={{ fontFamily: fonts[fontFamily] }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Component Preview
                </h3>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <button
                    className="px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    style={{
                      backgroundColor: primaryColor,
                      color: "white",
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    Primary Button
                  </button>
                  <button
                    className="px-6 py-3 rounded-lg font-semibold border transition-colors duration-200"
                    style={{
                      borderColor: primaryColor,
                      color: primaryColor,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    Secondary Button
                  </button>
                </div>

                {/* Card */}
                <div
                  className="p-6 rounded-xl border"
                  style={{
                    borderRadius: `${borderRadius * 1.5}px`,
                    padding: `${spacingBase * 2}px`,
                  }}
                >
                  <h4 className="text-lg font-semibold mb-2">Card Component</h4>
                  <p className="text-gray-600 mb-4">
                    This card demonstrates the current design tokens including
                    spacing, border radius, and typography.
                  </p>
                  <div className="flex space-x-3">
                    {["Tag 1", "Tag 2", "Tag 3"].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{
                          backgroundColor: primaryColor + "20",
                          color: primaryColor,
                          borderRadius: `${borderRadius * 2}px`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Generated Code */}
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">
                    Generated Design System
                  </h3>
                  <button
                    onClick={copySystem}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2"
                  >
                    <span>📋</span>
                    <span>Copy</span>
                  </button>
                </div>
                <pre className="text-gray-200 text-sm overflow-x-auto">
                  <code>{generateDesignSystem()}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <AdPlaceholder />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "🎨",
              title: "Design Tokens",
              description: "Colors, typography, spacing, and more",
            },
            {
              icon: "📦",
              title: "Component Ready",
              description: "Pre-built component styles included",
            },
            {
              icon: "⚡",
              title: "Framework Agnostic",
              description: "Works with any CSS framework",
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

export default DesignSystemBuilder;
