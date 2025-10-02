import React, { useState } from "react";
import Values from "values.js";
import toast from "react-hot-toast";
import SingleColor from "../components/SingleColor";
import { Link } from "react-router-dom";

const Color = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleColor = async (e) => {
    e.preventDefault();
    if (!color) {
      setError(true);
      toast.error("Please enter a color value");
      return;
    }

    setIsGenerating(true);

    // Simulate processing delay for better UX
    setTimeout(() => {
      try {
        const clr = new Values(color).all(10);
        setList(clr);
        setError(false);
        toast.success(`Generated ${clr.length} color shades`);
      } catch (err) {
        setError(true);
        toast.error("Invalid color value. Try hex, rgb, or color names.");
      }
      setIsGenerating(false);
    }, 500);
  };

  const popularColors = [
    { name: "Blue", value: "#3B82F6" },
    { name: "Purple", value: "#8B5CF6" },
    { name: "Pink", value: "#EC4899" },
    { name: "Green", value: "#10B981" },
    { name: "Orange", value: "#F59E0B" },
    { name: "Red", value: "#EF4444" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Color Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Generate beautiful color shades and tints from any color value.
            Perfect for creating consistent color palettes for your design
            system.
          </p>
        </div>

        {/* Top Ad */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Controls Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Color Input Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Generate Colors
              </h3>

              <form onSubmit={handleColor} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color Value
                  </label>
                  <input
                    type="text"
                    placeholder="Enter hex, rgb, or color name..."
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                      error ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Examples: #3B82F6, rgb(59, 130, 246), blue
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Generating...
                    </span>
                  ) : (
                    "🎨 Generate Palette"
                  )}
                </button>
              </form>
            </div>

            {/* Popular Colors */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular Colors
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {popularColors.map((popularColor, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setColor(popularColor.value);
                      toast.success(`Selected ${popularColor.name}`);
                    }}
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg border border-gray-300 group-hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: popularColor.value }}
                    />
                    <div className="text-left">
                      <div className="font-medium text-gray-900 text-sm">
                        {popularColor.name}
                      </div>
                      <div className="text-gray-500 text-xs font-mono">
                        {popularColor.value}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    const randomColor =
                      "#" + Math.floor(Math.random() * 16777215).toString(16);
                    setColor(randomColor);
                    toast.success("Random color selected!");
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  🎲 Random Color
                </button>
                <button
                  onClick={() => {
                    if (list.length > 0) {
                      const allColors = list.map((item) => item.hex).join(", ");
                      navigator.clipboard.writeText(allColors);
                      toast.success("All colors copied to clipboard!");
                    }
                  }}
                  disabled={list.length === 0}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  📋 Copy All Colors
                </button>
              </div>
            </div>

            {/* Related Tools */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                More Tools
              </h3>
              <div className="space-y-3">
                <Link
                  to="/gradient-generator"
                  className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
                >
                  <span className="text-lg">🔄</span>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Gradient Generator
                    </div>
                    <div className="text-gray-600 text-sm">
                      Create beautiful CSS gradients
                    </div>
                  </div>
                </Link>
                <Link
                  to="/all-tools"
                  className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
                >
                  <span className="text-lg">🛠️</span>
                  <div>
                    <div className="font-semibold text-gray-900">
                      All Design Tools
                    </div>
                    <div className="text-gray-600 text-sm">
                      Explore our complete toolkit
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Color Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Color Palette
                </h2>
                {list.length > 0 && (
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {list.length} shades generated
                  </div>
                )}
              </div>

              {list.length > 0 ? (
                <>
                  {/* Color Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                    {list.map((item, index) => (
                      <SingleColor
                        key={index}
                        hex={item.hex}
                        index={index}
                        {...item}
                      />
                    ))}
                  </div>

                  {/* Palette Info */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Palette Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">
                          Base Color
                        </h4>
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-12 h-12 rounded-lg border"
                            style={{ backgroundColor: color }}
                          />
                          <div>
                            <div className="font-mono font-semibold text-gray-900">
                              {color}
                            </div>
                            <div className="text-gray-500 text-sm">
                              Original input
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">
                          Statistics
                        </h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>Total Shades:</span>
                            <span className="font-semibold">{list.length}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Lightest:</span>
                            <span className="font-mono font-semibold">
                              {list[list.length - 1]?.hex}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Darkest:</span>
                            <span className="font-mono font-semibold">
                              {list[0]?.hex}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No Colors Generated Yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Enter a color value above to generate a beautiful palette of
                    shades and tints.
                  </p>
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">
                      💡 Pro Tip
                    </h4>
                    <p className="text-purple-800 text-sm">
                      Try using hex codes (#3B82F6), RGB values (rgb(59, 130,
                      246)), or common color names (blue, red, green) for best
                      results.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle Ad */}

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Use Our Color Generator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎨",
                title: "Perfect Color Scales",
                description:
                  "Generate mathematically perfect shades and tints for consistent design systems",
              },
              {
                icon: "📋",
                title: "Easy Copy & Paste",
                description:
                  "Copy individual colors or entire palettes with one click",
              },
              {
                icon: "⚡",
                title: "Multiple Formats",
                description:
                  "Supports hex codes, RGB values, and color names for maximum flexibility",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Ad */}
      </div>
    </div>
  );
};

export default Color;
