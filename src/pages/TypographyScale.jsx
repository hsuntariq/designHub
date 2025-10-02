import React, { useState, useEffect } from "react";

const TypographyScale = () => {
  const [baseSize, setBaseSize] = useState(16);
  const [scaleRatio, setScaleRatio] = useState(1.25);
  const [selectedFont, setSelectedFont] = useState("inter");
  const [isCopied, setIsCopied] = useState(false);

  // Font families with proper fallbacks
  const fonts = {
    inter: {
      name: "Inter",
      family:
        "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      link: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    },
    system: {
      name: "System Font",
      family:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
      link: null,
    },
    georgia: {
      name: "Georgia",
      family: "Georgia, 'Times New Roman', Times, serif",
      link: null,
    },
    mono: {
      name: "Monospace",
      family:
        "'SF Mono', 'Roboto Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      link: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap",
    },
  };

  // Generate typography scale
  const generateScale = () => {
    const steps = [-2, -1, 0, 1, 2, 3, 4, 5, 6];
    return steps.map((step) => {
      const size = baseSize * Math.pow(scaleRatio, step);
      return {
        step,
        size: Math.round(size * 100) / 100,
        lineHeight: Math.round(size * 1.2 * 100) / 100,
        fontWeight: step <= 0 ? 400 : step >= 4 ? 700 : 500,
        name: getTypeName(step),
      };
    });
  };

  const getTypeName = (step) => {
    const names = {
      "-2": "Caption / Small",
      "-1": "Body Small",
      0: "Body / Paragraph",
      1: "H6 / Lead",
      2: "H5 / Subtitle",
      3: "H4",
      4: "H3",
      5: "H2",
      6: "H1 / Display",
    };
    return names[step] || `Step ${step}`;
  };

  const typographyScale = generateScale();

  // Common scale ratios
  const commonRatios = [
    { value: 1.067, label: "Minor Second", description: "Subtle hierarchy" },
    { value: 1.125, label: "Major Second", description: "Balanced" },
    { value: 1.2, label: "Minor Third", description: "Modern & clean" },
    { value: 1.25, label: "Major Third", description: "Classic & clear" },
    { value: 1.333, label: "Perfect Fourth", description: "Strong contrast" },
    { value: 1.414, label: "Augmented Fourth", description: "Dramatic" },
    { value: 1.5, label: "Perfect Fifth", description: "Very dramatic" },
    { value: 1.618, label: "Golden Ratio", description: "Harmonious" },
  ];

  // Copy to clipboard function
  const copyCSS = () => {
    const css = generateCSS();
    navigator.clipboard.writeText(css);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Generate CSS code
  const generateCSS = () => {
    const fontFamily = fonts[selectedFont].family;
    let css = `/* Typography Scale - Base: ${baseSize}px, Ratio: ${scaleRatio} */\n`;
    css += `:root {\n`;
    css += `  --font-family: ${fontFamily};\n`;
    css += `  --base-size: ${baseSize}px;\n`;
    css += `  --scale-ratio: ${scaleRatio};\n\n`;

    typographyScale.forEach((item) => {
      css += `  --fs-${
        item.step >= 0 ? `plus-${item.step}` : `minus-${Math.abs(item.step)}`
      }: ${item.size}px;\n`;
      css += `  --lh-${
        item.step >= 0 ? `plus-${item.step}` : `minus-${Math.abs(item.step)}`
      }: ${item.lineHeight}px;\n`;
    });

    css += `}\n\n`;

    // CSS classes
    typographyScale.forEach((item) => {
      const className = item.name
        .toLowerCase()
        .split(" / ")[0]
        .replace(/\s+/g, "-");
      css += `.${className} {\n`;
      css += `  font-size: ${item.size}px;\n`;
      css += `  line-height: ${item.lineHeight}px;\n`;
      css += `  font-weight: ${item.fontWeight};\n`;
      css += `  font-family: var(--font-family);\n`;
      css += `}\n`;
    });

    return css;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Typography Scale Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create beautiful, harmonious type scales for your design system.
            Perfect for websites, apps, and branding projects.
          </p>
        </div>

        {/* Ad Placement - Top */}

        <div className="grid grid-cols-1 sticky-top lg:grid-cols-3 gap-8 mb-12">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-8">
            {/* Base Size Control */}
            <div className="bg-white  rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Base Settings
              </h3>

              <div className="space-y-6">
                {/* Base Font Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Base Font Size:{" "}
                    <span className="text-blue-600 font-semibold">
                      {baseSize}px
                    </span>
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    step="1"
                    value={baseSize}
                    onChange={(e) => setBaseSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>12px</span>
                    <span>18px</span>
                    <span>24px</span>
                  </div>
                </div>

                {/* Font Family */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Font Family
                  </label>
                  <select
                    value={selectedFont}
                    onChange={(e) => setSelectedFont(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    {Object.entries(fonts).map(([key, font]) => (
                      <option key={key} value={key}>
                        {font.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Scale Ratio Control */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Scale Ratio
              </h3>

              <div className="space-y-4">
                {/* Ratio Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Ratio:{" "}
                    <span className="text-purple-600 font-semibold">
                      {scaleRatio}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="1.067"
                    max="1.618"
                    step="0.001"
                    value={scaleRatio}
                    onChange={(e) => setScaleRatio(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Common Ratios */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Common Ratios:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {commonRatios.map((ratio) => (
                      <button
                        key={ratio.value}
                        onClick={() => setScaleRatio(ratio.value)}
                        className={`p-3 text-left rounded-lg border transition-all duration-200 ${
                          scaleRatio === ratio.value
                            ? "border-purple-500 bg-purple-50 shadow-md"
                            : "border-gray-200 hover:border-purple-300 hover:bg-purple-25"
                        }`}
                      >
                        <div className="font-semibold text-gray-900 text-sm">
                          {ratio.label}
                        </div>
                        <div className="text-gray-600 text-xs">
                          {ratio.value}
                        </div>
                        <div className="text-gray-500 text-xs mt-1">
                          {ratio.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Export Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Export CSS
              </h3>
              <button
                onClick={copyCSS}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isCopied ? (
                  <>
                    <span>✅</span>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <span>📋</span>
                    <span>Copy CSS to Clipboard</span>
                  </>
                )}
              </button>
              <p className="text-gray-500 text-xs text-center mt-3">
                Generates CSS variables and utility classes
              </p>
            </div>
          </div>

          {/* Typography Scale Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Type Scale Preview
                </h2>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Font: {fonts[selectedFont].name}
                </div>
              </div>

              {/* Scale Display */}
              <div
                className="space-y-8"
                style={{ fontFamily: fonts[selectedFont].family }}
              >
                {typographyScale.map((item) => (
                  <div
                    key={item.step}
                    className="border-l-4 border-purple-500 pl-6 py-2 group hover:bg-gray-50 rounded-r-lg transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div
                          className="text-gray-900 leading-tight mb-1"
                          style={{
                            fontSize: `${item.size}px`,
                            lineHeight: `${item.lineHeight}px`,
                            fontWeight: item.fontWeight,
                          }}
                        >
                          {item.name}
                        </div>
                        <div className="text-gray-500 text-sm">
                          The quick brown fox jumps over the lazy dog
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded group-hover:bg-purple-100 transition-colors duration-200">
                        <div>{item.size}px</div>
                        <div className="text-xs">/{item.lineHeight}px</div>
                      </div>
                    </div>
                    <div className="flex space-x-4 text-xs text-gray-400 mt-2">
                      <span>Step {item.step}</span>
                      <span>Weight {item.fontWeight}</span>
                      <span>
                        Ratio: {Math.pow(scaleRatio, item.step).toFixed(3)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scale Visualization */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Scale Visualization
                </h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-end justify-between h-32">
                    {typographyScale.map((item, index) => (
                      <div
                        key={item.step}
                        className="flex flex-col items-center"
                      >
                        <div
                          className="bg-gradient-to-b from-purple-500 to-blue-500 rounded-t w-8 transition-all duration-300"
                          style={{
                            height: `${
                              (item.size /
                                typographyScale[typographyScale.length - 1]
                                  .size) *
                              80
                            }px`,
                          }}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2 text-center">
                          <div>{item.size}px</div>
                          <div className="text-gray-400">Step {item.step}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Placement - Bottom */}

        {/* CSS Output Preview */}
        <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
            <h3 className="text-white font-semibold">Generated CSS</h3>
            <button
              onClick={copyCSS}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2"
            >
              <span>📋</span>
              <span>Copy</span>
            </button>
          </div>
          <pre className="p-6 text-gray-200 text-sm overflow-x-auto">
            <code>{generateCSS()}</code>
          </pre>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "🎨",
              title: "Design Systems",
              description:
                "Perfect for creating consistent typography across your projects",
            },
            {
              icon: "📱",
              title: "Responsive",
              description:
                "Scale beautifully across all devices and screen sizes",
            },
            {
              icon: "⚡",
              title: "Performance",
              description: "Clean CSS output optimized for fast loading",
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

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(139, 92, 246, 0.4);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(139, 92, 246, 0.4);
        }
      `}</style>
    </div>
  );
};

export default TypographyScale;
