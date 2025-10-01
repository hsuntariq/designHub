import React, { useState, useEffect } from "react";

const ColorPaletteGenerator = () => {
  const [baseColor, setBaseColor] = useState("#3B82F6");
  const [paletteType, setPaletteType] = useState("complementary");
  const [generatedPalette, setGeneratedPalette] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);

  const paletteTypes = {
    complementary: { name: "Complementary", colors: 2 },
    analogous: { name: "Analogous", colors: 3 },
    triadic: { name: "Triadic", colors: 3 },
    tetradic: { name: "Tetradic", colors: 4 },
    monochromatic: { name: "Monochromatic", colors: 5 },
    shades: { name: "Shades", colors: 6 },
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  const generatePalette = () => {
    const baseRgb = hexToRgb(baseColor);
    if (!baseRgb) return;

    let colors = [];

    switch (paletteType) {
      case "complementary":
        colors = [
          baseColor,
          rgbToHex(255 - baseRgb.r, 255 - baseRgb.g, 255 - baseRgb.b),
        ];
        break;

      case "analogous":
        colors = [
          baseColor,
          rgbToHex((baseRgb.r + 30) % 255, baseRgb.g, baseRgb.b),
          rgbToHex((baseRgb.r - 30 + 255) % 255, baseRgb.g, baseRgb.b),
        ];
        break;

      case "triadic":
        colors = [
          baseColor,
          rgbToHex(baseRgb.g, baseRgb.b, baseRgb.r),
          rgbToHex(baseRgb.b, baseRgb.r, baseRgb.g),
        ];
        break;

      case "tetradic":
        colors = [
          baseColor,
          rgbToHex(baseRgb.g, baseRgb.r, baseRgb.b),
          rgbToHex(baseRgb.b, baseRgb.g, baseRgb.r),
          rgbToHex(baseRgb.r, baseRgb.b, baseRgb.g),
        ];
        break;

      case "monochromatic":
        for (let i = 0; i < 5; i++) {
          const factor = 0.8 - i * 0.15;
          colors.push(
            rgbToHex(
              Math.min(255, Math.max(0, Math.round(baseRgb.r * factor))),
              Math.min(255, Math.max(0, Math.round(baseRgb.g * factor))),
              Math.min(255, Math.max(0, Math.round(baseRgb.b * factor)))
            )
          );
        }
        break;

      case "shades":
        for (let i = 0; i < 6; i++) {
          const factor = 1 - i * 0.15;
          colors.push(
            rgbToHex(
              Math.min(255, Math.max(0, Math.round(baseRgb.r * factor))),
              Math.min(255, Math.max(0, Math.round(baseRgb.g * factor))),
              Math.min(255, Math.max(0, Math.round(baseRgb.b * factor)))
            )
          );
        }
        break;

      default:
        colors = [baseColor];
    }

    setGeneratedPalette(colors);
  };

  const savePalette = () => {
    const newPalette = {
      id: Date.now(),
      colors: generatedPalette,
      baseColor,
      type: paletteType,
      timestamp: new Date().toISOString(),
    };
    setSavedPalettes((prev) => [newPalette, ...prev.slice(0, 4)]);
  };

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
  };

  useEffect(() => {
    generatePalette();
  }, [baseColor, paletteType]);

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
            Color Palette Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create beautiful, harmonious color palettes for your design system.
            Perfect for branding, UI design, and creative projects.
          </p>
        </div>

        <AdPlaceholder />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Base Color Picker */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Base Color
              </h3>
              <div className="flex items-center space-x-4">
                <input
                  type="color"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="w-20 h-20 rounded-xl cursor-pointer"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Color Value
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={baseColor}
                      onChange={(e) => setBaseColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                    />
                    <button
                      onClick={() => copyColor(baseColor)}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      📋
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Palette Type */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Palette Type
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(paletteTypes).map(([key, type]) => (
                  <button
                    key={key}
                    onClick={() => setPaletteType(key)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      paletteType === key
                        ? "border-purple-500 bg-purple-50 shadow-md"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-25"
                    }`}
                  >
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      {type.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {type.colors} colors
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={savePalette}
                  disabled={!generatedPalette.length}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  💾 Save Palette
                </button>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(generatedPalette.join(", "))
                  }
                  disabled={!generatedPalette.length}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  📋 Copy All Colors
                </button>
              </div>
            </div>

            {/* Saved Palettes */}
            {savedPalettes.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recently Saved
                </h3>
                <div className="space-y-3">
                  {savedPalettes.map((palette) => (
                    <div
                      key={palette.id}
                      className="border border-gray-200 rounded-lg p-3"
                    >
                      <div className="flex space-x-1 mb-2">
                        {palette.colors.map((color, index) => (
                          <div
                            key={index}
                            className="flex-1 h-8 rounded"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 flex justify-between">
                        <span>{paletteTypes[palette.type].name}</span>
                        <span>
                          {new Date(palette.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Palette Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {paletteTypes[paletteType].name} Palette
                </h2>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {generatedPalette.length} colors
                </div>
              </div>

              {/* Color Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {generatedPalette.map(
                  (color, index) => (
                    console.log(color),
                    (
                      <div
                        key={index}
                        className="group relative aspect-square rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
                        style={{ backgroundColor: color }}
                        onClick={() => copyColor(color)}
                      >
                        <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                          <div className="font-mono text-sm font-semibold">
                            {color}
                          </div>
                          <div className="text-xs text-gray-600">
                            Click to copy
                          </div>
                        </div>
                      </div>
                    )
                  )
                )}
              </div>

              {/* Color Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Color Values
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {generatedPalette.map((color, index) => {
                    const rgb = hexToRgb(color);
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 border"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div
                            className="w-8 h-8 rounded border"
                            style={{ backgroundColor: color }}
                          />
                          <div className="font-semibold text-gray-900">
                            Color {index + 1}
                          </div>
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">HEX:</span>
                            <span className="font-mono font-semibold">
                              {color}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">RGB:</span>
                            <span className="font-mono">
                              {rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : "N/A"}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <AdPlaceholder />

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
          {[
            {
              icon: "🎨",
              title: "Harmonious Colors",
              description: "Mathematically perfect color relationships",
            },
            {
              icon: "📱",
              title: "UI Ready",
              description: "Perfect for websites, apps, and branding",
            },
            {
              icon: "⚡",
              title: "Instant Export",
              description: "Copy colors directly to your clipboard",
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

export default ColorPaletteGenerator;
