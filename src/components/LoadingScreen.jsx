import React, { useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 2500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        className="relative flex items-center justify-center"
      >
        {/* Outer Expanding Ring */}
        <motion.div
          className="absolute w-20 h-20 rounded-full border-4 border-blue-500"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Inner Pulsing Dot */}
        <motion.div
          className="w-6 h-6 bg-blue-500 rounded-full shadow-xl"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.8, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;

