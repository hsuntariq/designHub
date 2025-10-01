import React, { useState, useRef } from "react";
import { ChromePicker } from "react-color"; // npm install react-color
import toast, { Toaster } from "react-hot-toast";
import html2canvas from "html2canvas"; // npm install html2canvas
import jsPDF from "jspdf"; // npm install jspdf
import { saveAs } from "file-saver"; // npm install file-saver

const GradientMaker = () => {
  const [colors, setColors] = useState([
    { hex: "#F8997D", pos: 0 },
    { hex: "#A83279", pos: 100 },
  ]);
  const [angle, setAngle] = useState(90);
  const [type, setType] = useState("linear");

  const previewRef = useRef(null);

  const handleColorChange = (index, hex) => {
    const updated = [...colors];
    updated[index].hex = hex;
    setColors(updated);
  };

  const handlePosChange = (index, pos) => {
    const updated = [...colors];
    updated[index].pos = pos;
    setColors(updated);
  };

  const addStop = () => {
    if (colors.length < 5) {
      setColors([...colors, { hex: "#000000", pos: 50 }]);
    } else {
      toast.error("Max 5 stops allowed");
    }
  };

  const removeStop = (index) => {
    if (colors.length > 2) {
      setColors(colors.filter((_, i) => i !== index));
    } else {
      toast.error("At least 2 stops required");
    }
  };

  const gradientCSS =
    type === "linear"
      ? `linear-gradient(${angle}deg, ${colors
          .map((c) => `${c.hex} ${c.pos}%`)
          .join(", ")})`
      : `radial-gradient(circle, ${colors
          .map((c) => `${c.hex} ${c.pos}%`)
          .join(", ")})`;

  const copyCSS = () => {
    navigator.clipboard.writeText(`background: ${gradientCSS};`);
    toast.success("CSS copied to clipboard!");
  };

  const exportPNG = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current);
    canvas.toBlob((blob) => {
      saveAs(blob, "gradient.png");
    });
  };

  const exportJSON = () => {
    const data = {
      type,
      angle,
      colors,
      css: gradientCSS,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "gradient.json");
  };

  const exportPDF = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.text("Gradient Generator", 10, 10);
    pdf.addImage(imgData, "PNG", 10, 20, 180, 100);
    pdf.setFontSize(10);
    pdf.text(`CSS:\nbackground: ${gradientCSS};`, 10, 130);
    pdf.save("gradient.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
      <Toaster position="bottom-center" />
      <h1 className="text-3xl font-bold mb-2">🌈 Gradient Maker</h1>
      <p className="text-gray-500 mb-6">
        Create, preview, and export beautiful gradients.
      </p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Controls */}
        <div className="bg-white p-6 rounded-xl shadow-md flex-1">
          {colors.map((c, i) => (
            <div key={i} className="mb-4 border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Stop {i + 1}</span>
                <button
                  onClick={() => removeStop(i)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
              <ChromePicker
                color={c.hex}
                onChange={(color) => handleColorChange(i, color.hex)}
                disableAlpha
              />
              <input
                type="range"
                min="0"
                max="100"
                value={c.pos}
                onChange={(e) => handlePosChange(i, e.target.value)}
                className="w-full mt-2"
              />
              <p className="text-sm text-gray-600">Position: {c.pos}%</p>
            </div>
          ))}
          <button
            onClick={addStop}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            + Add Color Stop
          </button>

          <div className="mt-4">
            <label className="block text-sm font-medium">Rotation</label>
            <input
              type="number"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="border rounded px-2 py-1 w-24"
              disabled={type === "radial"}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={copyCSS}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Copy CSS
            </button>
            <button
              onClick={exportPNG}
              className="px-4 py-2 bg-purple-500 text-white rounded-md"
            >
              Export PNG
            </button>
            <button
              onClick={exportJSON}
              className="px-4 py-2 bg-indigo-500 text-white rounded-md"
            >
              Export JSON
            </button>
            <button
              onClick={exportPDF}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Export PDF
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="flex-1">
          <div
            ref={previewRef}
            className="w-full h-80 rounded-xl shadow-md"
            style={{ background: gradientCSS }}
          ></div>
          <pre className="mt-4 bg-gray-800 text-white text-sm p-4 rounded-md">
            {`background: ${gradientCSS};`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default GradientMaker;
