import React, { useState } from "react";
import { paragraphs } from "../data/loremData";

const DesignContentForm = () => {
  const [formData, setFormData] = useState({
    contentType: "words",
    quantity: 1,
    specificNumber: "",
    description: "",
  });

  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateContent = () => {
    setIsGenerating(true);

    // Simulate API call delay
    setTimeout(() => {
      let content = "";
      const quantity = formData.specificNumber || formData.quantity;

      switch (formData.contentType) {
        case "words":
          const randomParagraph =
            paragraphs[Math.floor(Math.random() * paragraphs.length)];
          const words = randomParagraph.split(" ").slice(0, quantity).join(" ");
          content = words + (quantity > 1 ? "..." : "");
          break;

        case "paragraphs":
          const selectedParagraphs = paragraphs.slice(
            0,
            Math.min(quantity, paragraphs.length)
          );
          content = selectedParagraphs.join("\n\n");
          break;

        case "letter":
          const letters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          let letterContent = "";
          for (let i = 0; i < quantity; i++) {
            letterContent +=
              letters[Math.floor(Math.random() * letters.length)] + " ";
          }
          content = letterContent.trim();
          break;

        case "radio":
          const radioOptions = [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E",
          ];
          content = radioOptions
            .slice(0, Math.min(quantity, radioOptions.length))
            .map((option) => `🔘 ${option}`)
            .join("\n");
          break;

        default:
          content = "Please select a content type.";
      }

      setGeneratedContent(content);
      setIsGenerating(false);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateContent();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    // You could add a toast notification here
    alert("Content copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Design Content Generator
          </h1>
          <p className="text-lg text-gray-600">
            Create beautiful content for your designs and mockups
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300 h-fit">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Content Type Selection */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Content Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      value: "words",
                      label: "Words",
                      icon: "📝",
                      description: "Generate individual words",
                    },
                    {
                      value: "paragraphs",
                      label: "Paragraphs",
                      icon: "📄",
                      description: "Beautiful paragraphs",
                    },
                    {
                      value: "letter",
                      label: "Letters",
                      icon: "✉️",
                      description: "Random letters",
                    },
                    {
                      value: "radio",
                      label: "Options",
                      icon: "🔘",
                      description: "Radio button options",
                    },
                  ].map((type) => (
                    <label
                      key={type.value}
                      className={`relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        formData.contentType === type.value
                          ? "border-purple-500 bg-purple-50 shadow-md"
                          : "border-gray-200 hover:border-purple-300 hover:bg-purple-25"
                      }`}
                    >
                      <input
                        type="radio"
                        name="contentType"
                        value={type.value}
                        checked={formData.contentType === type.value}
                        onChange={handleInputChange}
                        className="absolute opacity-0"
                      />
                      <span className="text-2xl mb-2">{type.icon}</span>
                      <span className="text-sm font-medium text-gray-700 text-center">
                        {type.label}
                      </span>
                      <span className="text-xs text-gray-500 text-center mt-1">
                        {type.description}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity Input */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center justify-between">
                  <span>Quantity</span>
                  <span className="text-xs font-normal text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                    {formData.quantity}
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    name="quantity"
                    min="1"
                    max="50"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1</span>
                    <span>25</span>
                    <span>50</span>
                  </div>
                </div>
              </div>

              {/* Number Input */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Specific Number
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="specificNumber"
                    min="1"
                    max="1000"
                    placeholder="Enter a specific number (optional)"
                    value={formData.specificNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-400">#</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Leave empty to use the slider value
                </p>
              </div>

              {/* Description Textarea */}
              {/* <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="3"
                  placeholder="Tell us more about what you need..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none bg-white"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div> */}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-purple-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                  <>
                    Generate Content
                    <span className="ml-2">✨</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Generated Content
              </h2>
              {generatedContent && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 px-4 py-2 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors duration-200"
                >
                  <span>📋</span>
                  <span>Copy</span>
                </button>
              )}
            </div>

            <div className="space-y-4">
              {generatedContent ? (
                <div className="bg-gray-50 rounded-xl overflow-y-scroll p-6 max-h-max h-[500px]">
                  <div className="whitespace-pre-wrap text-justify  text-gray-700 leading-relaxed">
                    {generatedContent}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-4">🎨</div>
                    <p>Your generated content will appear here</p>
                    <p className="text-sm mt-2">
                      Fill out the form and click generate
                    </p>
                  </div>
                </div>
              )}

              {/* Content Preview */}
              {generatedContent && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="text-sm font-semibold text-blue-900 mb-2 flex items-center">
                    <span className="mr-2">👁️</span>
                    Content Preview
                  </h3>
                  <div className="text-xs text-blue-700">
                    <p>
                      Type:{" "}
                      {formData.contentType.charAt(0).toUpperCase() +
                        formData.contentType.slice(1)}
                    </p>
                    <p>
                      Quantity: {formData.specificNumber || formData.quantity}
                    </p>
                    {formData.description && (
                      <p>Description: {formData.description}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Perfect for mockups, prototypes, and design presentations
          </p>
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

export default DesignContentForm;
