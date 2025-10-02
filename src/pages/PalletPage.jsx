import React, { useState, useEffect } from "react";
import Values from "values.js";
import {
  MdContentCopy,
  MdShuffle,
  MdLock,
  MdLockOpen,
  MdFavorite,
} from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

// Generate initial palette from base color
const generatePalette = (baseColor = "#3498db") => {
  try {
    const shades = new Values(baseColor).all(20);
    return shades.slice(0, 5).map((c) => ({
      hex: `#${c.hex}`,
      name: baseColor,
    }));
  } catch (err) {
    console.error("Invalid color:", baseColor, err);
    return [];
  }
};

const ColorCard = ({ hex, name, onShuffle, onFavorite }) => {
  const [locked, setLocked] = useState(false);

  const copyHex = () => {
    navigator.clipboard.writeText(hex);
    toast.success(`${hex} copied!`);
  };

  return (
    <div
      className="relative flex-1 h-screen flex flex-col justify-between items-center p-6"
      style={{ backgroundColor: hex }}
    >
      {/* Toolbar */}
      <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex flex-col gap-4 justify-center">
        <IoMdClose
          className="text-black cursor-pointer hover:scale-110 transition"
          size={20}
        />
        <MdShuffle
          onClick={() => !locked && onShuffle?.()}
          className={`cursor-pointer hover:scale-110 transition ${
            locked ? "opacity-30 cursor-not-allowed" : "text-black"
          }`}
          size={20}
        />
        <MdContentCopy
          onClick={copyHex}
          className="text-black cursor-pointer hover:scale-110 transition"
          size={20}
        />
        <MdFavorite
          onClick={onFavorite}
          className="text-black cursor-pointer hover:scale-110 transition"
          size={20}
        />
        {locked ? (
          <MdLock
            onClick={() => setLocked(false)}
            className="text-black cursor-pointer hover:scale-110 transition"
            size={20}
          />
        ) : (
          <MdLockOpen
            onClick={() => setLocked(true)}
            className="text-black cursor-pointer hover:scale-110 transition"
            size={20}
          />
        )}
      </div>

      {/* Bottom info */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-black">
          {hex.replace("#", "").toUpperCase()}
        </h2>
        <p className="text-sm text-black/80">{name}</p>
      </div>
    </div>
  );
};

const PalettePage = () => {
  const [colors, setColors] = useState(generatePalette());

  // Shuffle individual column
  const shuffleColor = (index) => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    const newPalette = generatePalette(randomColor);
    const updated = [...colors];
    updated[index] = newPalette[Math.floor(Math.random() * newPalette.length)];
    setColors(updated);
  };

  // Shuffle whole palette (press Spacebar)
  const shuffleAll = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setColors(generatePalette(randomColor));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        shuffleAll();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Save to favorites in localStorage
  const saveToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites.push(colors);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    toast.success("Palette saved to favorites!");
  };

  // Export as PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    colors.forEach((c, i) => {
      doc.setFillColor(c.hex);
      doc.rect(20, 20 + i * 30, 40, 20, "F");
      doc.text(c.hex, 70, 35 + i * 30);
    });
    doc.save("palette.pdf");
  };

  // Export as Excel
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(colors);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Palette");
    XLSX.writeFile(workbook, "palette.xlsx");
  };

  // Export as CSV
  const exportCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(colors);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "palette.csv";
    a.click();
  };

  // Export as JSON
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(colors, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "palette.json";
    a.click();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Palette Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready-to-use color palettes built with Tailwind CSS. Start
            generating beautiful color schemes for your projects.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full  overflow-x-scroll h-screen">
        <Toaster position="bottom-center" />

        {/* Instruction Banner */}
        <div className="bg-gray-900 text-white text-center py-2 text-sm">
          🎨 Press <b>Spacebar</b> to generate a new palette!
        </div>

        {/* Export Buttons */}
        <div className="flex flex-wrap gap-4 justify-center py-2 bg-gray-100">
          <button
            onClick={exportPDF}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Export PDF
          </button>
          <button
            onClick={exportExcel}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Export Excel
          </button>
          <button
            onClick={exportCSV}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Export CSV
          </button>
          <button
            onClick={exportJSON}
            className="px-3 py-1 bg-yellow-500 text-black rounded"
          >
            Export JSON
          </button>
          <button
            onClick={shuffleAll}
            className="px-3 py-1 bg-cyan-500 text-white rounded"
          >
            Generate New
          </button>
        </div>
        <div className="w-full flex overflow-x-scroll">
          {/* Palette */}
          <div className="flex shrink-0 flex-1">
            {colors.map((c, i) => (
              <ColorCard
                key={i}
                hex={c.hex}
                name={c.name}
                onShuffle={() => shuffleColor(i)}
                onFavorite={saveToFavorites}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PalettePage;
