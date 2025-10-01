import React, { useState } from "react";
import toast from "react-hot-toast";
import Values from "values.js";
import { MdContentCopy } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";
import { CometCard } from "../components/ui/comet-card";

const GradientGenerator = () => {
  const [color, setColor] = useState("");
  const [gradients, setGradients] = useState([]);

  const generateGradients = (e) => {
    e.preventDefault();
    if (!color) {
      toast.error("Please enter a base color");
      return;
    }

    try {
      const shades = new Values(color).all(20); // generate steps of 20
      const base = color;

      // create gradients from base → shades
      const generated = shades.map((shade) => {
        return `linear-gradient(to right, ${base}, #${shade.hex})`;
      });

      setGradients(generated);
    } catch {
      toast.error("Invalid color value");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <form onSubmit={generateGradients} className="space-y-4">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            🌈 Gradient Generator (Shades)
          </h1>

          <input
            type="text"
            placeholder="Enter a base color (e.g. #3498db)"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 px-6 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition"
          >
            Generate
          </button>
        </form>
      </div>

      {gradients.length > 0 && (
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gradients.map((gradient, i) => (
            <GradientCard gradient={gradient} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

const GradientCard = ({ gradient }) => {
  const [copied, setCopied] = useState(false);

  const copyGradient = () => {
    navigator.clipboard.writeText(`background: ${gradient};`);
    toast.success("Gradient copied!");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CometCard className="relative group h-48 w-full flex flex-col justify-end items-center rounded-2xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-md">
      {/* Gradient background */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style={{ background: gradient }}
      />

      {/* Copy button */}
      <div className="absolute top-3 left-3 z-10">
        {copied ? (
          <IoCheckmarkDone size={24} className="text-white drop-shadow-md" />
        ) : (
          <MdContentCopy
            onClick={copyGradient}
            size={24}
            className="cursor-pointer text-white drop-shadow-md hover:scale-110 transition"
          />
        )}
      </div>

      {/* Overlay with gradient text */}
      <div className="relative z-10 w-full text-center py-3 bg-black/40 backdrop-blur-sm">
        <p className="text-sm text-white font-mono truncate px-2">{gradient}</p>
      </div>
    </CometCard>
  );
};

export default GradientGenerator;
