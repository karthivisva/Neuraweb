import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Your square logo

const LoadingScreen = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 2500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div className="relative flex items-center justify-center">
        {/* Expanding Ripple Effect */}
        <motion.div
          className="absolute w-24 h-24 rounded-full border-4"
          style={{ borderColor: "#7f00ed" }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Circular Logo with Pulse Effect */}
        <motion.img
          src={logo}
          alt="Loading..."
          className="w-16 h-16 rounded-full shadow-xl object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.9, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
