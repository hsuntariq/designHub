// components/SingleColor.js
import React, { useState } from "react";
import toast from "react-hot-toast";

const SingleColor = ({ hex, weight, index }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      toast.success(`Copied ${hex} to clipboard!`);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy color");
    }
  };

  const getTextColor = () => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Calculate relative luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "text-gray-900" : "text-white";
  };

  return (
    <div
      className={`group relative aspect-square rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ${
        copied ? "ring-4 ring-purple-500 ring-opacity-50" : ""
      }`}
      style={{ backgroundColor: `#${hex}` }}
      onClick={copyToClipboard}
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200" />

      {/* Color Info */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-95 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 ${getTextColor()}`}
      >
        <div className="text-center">
          <div className="font-mono text-sm font-semibold mb-1">{hex}</div>
          <div className="text-xs opacity-75">{weight}%</div>
          <div className="text-xs mt-1 text-purple-600 font-medium">
            {copied ? "✓ Copied!" : "Click to copy"}
          </div>
        </div>
      </div>

      {/* Top-right indicator for very light/dark colors */}
      <div
        className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full ${
          getTextColor() === "text-gray-900"
            ? "bg-gray-900 text-white bg-opacity-20"
            : "bg-white text-gray-900 bg-opacity-20"
        }`}
      >
        {index}
      </div>
    </div>
  );
};

export default SingleColor;
