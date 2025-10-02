import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoClose } from "react-icons/io5";

const CSSGradientGenerator = () => {
  const [gradientType, setGradientType] = useState("linear");
  const [angle, setAngle] = useState(90);
  const [colors, setColors] = useState([
    { id: 1, value: "#667eea", position: 0 },
    { id: 2, value: "#764ba2", position: 100 },
  ]);
  const [savedGradients, setSavedGradients] = useState([]);

  const addColor = () => {
    const newId = Math.max(...colors.map((c) => c.id)) + 1;
    setColors([...colors, { id: newId, value: "#ffffff", position: 50 }]);
  };

  const removeColor = (id) => {
    if (colors.length > 2) {
      setColors(colors.filter((color) => color.id !== id));
    }
  };

  const updateColor = (id, field, value) => {
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, [field]: value } : color
      )
    );
  };

  useEffect(() => {
    const stored = localStorage.getItem("savedGradients");
    if (stored) {
      setSavedGradients(JSON.parse(stored));
    }
  }, []);

  const generateGradient = () => {
    const colorStops = colors
      .map((color) => `${color.value} ${color.position}%`)
      .join(", ");

    if (gradientType === "linear") {
      return `linear-gradient(${angle}deg, ${colorStops})`;
    } else if (gradientType === "radial") {
      return `radial-gradient(circle, ${colorStops})`;
    } else {
      return `conic-gradient(from ${angle}deg, ${colorStops})`;
    }
  };

  const gradientCSS = generateGradient();

  const copyCSS = () => {
    navigator.clipboard.writeText(`background: ${gradientCSS};`);
  };

  const saveGradient = () => {
    toast.success("Gradient Saved successfully!");
    const newGradient = {
      id: Date.now(),
      css: gradientCSS,
      type: gradientType,
      colors: [...colors],
      timestamp: new Date().toISOString(),
    };

    setSavedGradients((prev) => {
      const updated = [newGradient, ...prev.slice(0, 5)];

      // Save in localStorage
      localStorage.setItem("savedGradients", JSON.stringify(updated));

      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            CSS Gradient Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create beautiful CSS gradients for your designs. Perfect for
            backgrounds, buttons, and modern UI elements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Gradient Type */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Gradient Type
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { type: "linear", label: "Linear", icon: "➡️" },
                  { type: "radial", label: "Radial", icon: "⭕" },
                  { type: "conic", label: "Conic", icon: "🔄" },
                ].map((item) => (
                  <button
                    key={item.type}
                    onClick={() => setGradientType(item.type)}
                    className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                      gradientType === item.type
                        ? "border-purple-500 bg-purple-50 shadow-md"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-25"
                    }`}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {item.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Angle Control */}
            {gradientType !== "radial" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {gradientType === "linear" ? "Angle" : "Start Angle"}
                </h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={angle}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {angle}°
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Color Controls */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Colors</h3>
                <button
                  onClick={addColor}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  + Add Color
                </button>
              </div>

              <div className="space-y-4">
                {colors.map((color, index) => (
                  <div key={color.id} className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={color.value}
                      onChange={(e) =>
                        updateColor(color.id, "value", e.target.value)
                      }
                      className="w-12 h-12 rounded-lg cursor-pointer"
                    />

                    <div className="flex-1">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={color.position}
                        onChange={(e) =>
                          updateColor(
                            color.id,
                            "position",
                            Number(e.target.value)
                          )
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span className="font-semibold">{color.position}%</span>
                        <span>100%</span>
                      </div>
                    </div>

                    {colors.length > 2 && (
                      <button
                        onClick={() => removeColor(color.id)}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                      >
                        ×
                      </button>
                    )}
                  </div>
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
                  onClick={copyCSS}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  📋 Copy CSS
                </button>
                <button
                  onClick={saveGradient}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  💾 Save Gradient
                </button>
              </div>
            </div>

            {/* Saved Gradients */}
            {savedGradients.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recently Saved
                </h3>
                <div className="space-y-3 ">
                  {savedGradients.map((gradient) => (
                    <div
                      key={gradient.id}
                      className="relative h-16 rounded-lg border cursor-pointer transform hover:scale-105 transition-transform duration-200"
                      style={{ background: gradient.css }}
                      onClick={() =>
                        navigator.clipboard.writeText(
                          `background: ${gradient.css};`
                        )
                      }
                    >
                      {/* ❌ Delete button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // prevent triggering clipboard copy
                          const updated = savedGradients.filter(
                            (g) => g.id !== gradient.id
                          );
                          setSavedGradients(updated);
                          localStorage.setItem(
                            "savedGradients",
                            JSON.stringify(updated)
                          );
                        }}
                        className="absolute top-1 right-1 bg-white text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-xs shadow hover:bg-red-500 hover:text-white transition-colors"
                      >
                        <IoClose className="cursor-pointer" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl gradient-section shadow-lg p-8">
              <div className="flex  items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Gradient Preview
                </h2>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {colors.length} colors
                </div>
              </div>

              {/* Gradient Preview */}
              <div
                className="w-full h-96 rounded-2xl shadow-lg mb-8 transition-all duration-500"
                style={{ background: gradientCSS }}
              />

              {/* CSS Output */}
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">CSS Code</h3>
                  <button
                    onClick={copyCSS}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2"
                  >
                    <span>📋</span>
                    <span>Copy</span>
                  </button>
                </div>
                <pre className="text-gray-200 text-sm overflow-x-auto">
                  <code>background: {gradientCSS};</code>
                </pre>
              </div>

              {/* Color Details */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Color Stops
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {colors.map((color, index) => (
                    <div
                      key={color.id}
                      className="bg-white rounded-lg p-4 border text-center"
                    >
                      <div
                        className="w-12 h-12 rounded-lg mx-auto mb-3 border"
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="font-mono text-sm font-semibold mb-1">
                        {color.value}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {color.position}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Gradients */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Gradients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Sunset", colors: ["#ff6b6b", "#ffa726"] },
              { name: "Ocean", colors: ["#4facfe", "#00f2fe"] },
              { name: "Forest", colors: ["#43e97b", "#38f9d7"] },
              { name: "Lavender", colors: ["#a8edea", "#fed6e3"] },
              { name: "Sunrise", colors: ["#fa709a", "#fee140"] },
              { name: "Midnight", colors: ["#667eea", "#764ba2"] },
              { name: "Coral", colors: ["#ff9a9e", "#fecfef"] },
              { name: "Emerald", colors: ["#0ba360", "#3cba92"] },
            ].map((gradient, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-200"
                style={{
                  background: `linear-gradient(135deg, ${gradient.colors.join(
                    ", "
                  )})`,
                }}
                onClick={() => {
                  toast.success("Applied!");
                  document
                    .querySelector(".gradient-section")
                    ?.scrollIntoView({ behavior: "smooth" });

                  setColors(
                    gradient.colors.map((color, i) => ({
                      id: i + 1,
                      value: color,
                      position: (i / (gradient.colors.length - 1)) * 100,
                    }))
                  );
                }}
              >
                <div className="h-full flex items-end p-4">
                  <div className="text-white font-semibold text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    {gradient.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSGradientGenerator;
