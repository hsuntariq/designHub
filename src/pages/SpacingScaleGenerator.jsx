import React, { useState } from "react";

const SpacingScaleGenerator = () => {
  const [baseUnit, setBaseUnit] = useState(8);
  const [scaleRatio, setScaleRatio] = useState(1.5);
  const [units, setUnits] = useState(8);
  const [namingConvention, setNamingConvention] = useState("t-shirt");

  const generateScale = () => {
    const scale = [];
    for (let i = 0; i < units; i++) {
      const value = baseUnit * Math.pow(scaleRatio, i);
      scale.push({
        index: i,
        value: Math.round(value * 100) / 100,
        pixels: Math.round(value),
        rem: Math.round((value / 16) * 100) / 100,
        name: getName(i),
      });
    }
    return scale;
  };

  const getName = (index) => {
    const tShirtSizes = [
      "xs",
      "sm",
      "base",
      "md",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
    ];
    const numericSizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (namingConvention === "t-shirt") {
      return tShirtSizes[index] || `size-${index}`;
    } else {
      return numericSizes[index] || `size-${index}`;
    }
  };

  const spacingScale = generateScale();

  const copyScale = () => {
    const css = generateCSS();
    navigator.clipboard.writeText(css);
  };

  const generateCSS = () => {
    let css = `/* Spacing Scale - Base: ${baseUnit}px, Ratio: ${scaleRatio} */\n`;
    css += `:root {\n`;

    spacingScale.forEach((item) => {
      css += `  --space-${item.name}: ${item.pixels}px; /* ${item.rem}rem */\n`;
    });

    css += `}\n\n`;

    // Utility classes
    spacingScale.forEach((item) => {
      css += `.p-${item.name} { padding: var(--space-${item.name}); }\n`;
      css += `.m-${item.name} { margin: var(--space-${item.name}); }\n`;
      css += `.gap-${item.name} { gap: var(--space-${item.name}); }\n`;
    });

    return css;
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
            Spacing Scale Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create consistent spacing systems for your design projects. Perfect
            for margins, padding, and layout consistency.
          </p>
        </div>

        <AdPlaceholder />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Base Unit */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Base Settings
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Base Unit:{" "}
                    <span className="text-blue-600 font-semibold">
                      {baseUnit}px
                    </span>
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="16"
                    step="2"
                    value={baseUnit}
                    onChange={(e) => setBaseUnit(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>4px</span>
                    <span>8px</span>
                    <span>16px</span>
                  </div>
                </div>

                {/* Scale Ratio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Scale Ratio:{" "}
                    <span className="text-purple-600 font-semibold">
                      {scaleRatio}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="1.2"
                    max="2"
                    step="0.1"
                    value={scaleRatio}
                    onChange={(e) => setScaleRatio(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1.2</span>
                    <span>1.6</span>
                    <span>2.0</span>
                  </div>
                </div>

                {/* Number of Units */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Number of Units:{" "}
                    <span className="text-green-600 font-semibold">
                      {units}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="12"
                    step="1"
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Naming Convention */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Naming Convention
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setNamingConvention("t-shirt")}
                      className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                        namingConvention === "t-shirt"
                          ? "border-purple-500 bg-purple-50 shadow-md"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="font-semibold text-sm">T-Shirt</div>
                      <div className="text-gray-500 text-xs">
                        xs, sm, md, lg
                      </div>
                    </button>
                    <button
                      onClick={() => setNamingConvention("numeric")}
                      className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                        namingConvention === "numeric"
                          ? "border-purple-500 bg-purple-50 shadow-md"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="font-semibold text-sm">Numeric</div>
                      <div className="text-gray-500 text-xs">1, 2, 3, 4</div>
                    </button>
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
                onClick={copyScale}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                📋 Copy CSS to Clipboard
              </button>
            </div>
          </div>

          {/* Scale Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Spacing Scale
                </h2>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {units} units
                </div>
              </div>

              {/* Scale Visualization */}
              <div className="space-y-6 mb-8">
                {spacingScale.map((item) => (
                  <div
                    key={item.index}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-20 text-right">
                      <div className="font-semibold text-gray-900 text-sm">
                        {item.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {item.pixels}px
                      </div>
                    </div>

                    <div className="flex-1">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg h-8 transition-all duration-300 group-hover:opacity-90"
                        style={{ width: `${Math.min(item.pixels * 2, 400)}px` }}
                      />
                    </div>

                    <div className="w-24 text-left">
                      <div className="text-gray-600 text-sm font-mono">
                        {item.value}px
                      </div>
                      <div className="text-gray-400 text-xs font-mono">
                        {item.rem}rem
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scale Table */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Scale Values
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {spacingScale.map((item) => (
                    <div
                      key={item.index}
                      className="bg-white rounded-lg p-4 border"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-semibold text-gray-900 text-lg">
                          {item.name}
                        </div>
                        <div className="text-purple-600 font-mono text-sm">
                          {item.pixels}px
                        </div>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>Value: {item.value}px</div>
                        <div>REM: {item.rem}rem</div>
                        <div>
                          Ratio: {Math.pow(scaleRatio, item.index).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <AdPlaceholder />

        {/* CSS Output */}
        <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
            <h3 className="text-white font-semibold">Generated CSS</h3>
            <button
              onClick={copyScale}
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
      </div>
    </div>
  );
};

export default SpacingScaleGenerator;
