import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function PaletteGenerator() {
  const initialColors = [
    "bg-yellow-400",
    "bg-pink-300",
    "bg-purple-400",
    "bg-green-700",
  ];

  const [colors, setColors] = useState(initialColors);

  // Shuffle colors every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setColors((prev) => {
        const shuffled = [...prev];
        const idx = Math.floor(Math.random() * shuffled.length);
        const [removed] = shuffled.splice(idx, 1);
        shuffled.splice(
          Math.floor(Math.random() * shuffled.length),
          0,
          removed
        );
        return shuffled;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          The super fast color palettes generator!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Create the perfect palette or get inspired by thousands of beautiful
          color schemes.
        </p>
        <button className="mt-6 mx-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
          Start the generator!
        </button>
        <button className="mt-6 mx-4 bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition duration-300">
          Explore trending palettes
        </button>
      </div>

      {/* Animated Blocks */}
      <div className="mt-12 flex justify-center space-x-6 relative">
        {colors.map((color, i) => (
          <motion.div
            key={color + i}
            layout
            // transition={{
            //   type: "spring",
            //   stiffness: 300,
            //   damping: 25,
            // }}
            animate={{
              borderRadius: ["1rem", "2rem", "50%", "1rem"], // morph shape
              rotate: [0, 10, -10, 0], // tilt
            }}
            transitionEnd={{ rotate: 0 }}
            className={`w-56 h-44 ${color} shadow-lg`}
          />
        ))}
      </div>
    </div>
  );
}

export default PaletteGenerator;
