import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Your square logo

const LoadingScreen = ({ onLoaded }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true); // Start exit animation
      setTimeout(() => {
        onLoaded(); // Call the parent function after animation
      }, 1000); // Wait for exit animation to complete
    }, 2500); // Initial loading animation duration

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={
          isExiting
            ? {
                x: "-45vw", // Move to left
                y: "-40vh", // Move to top
                scale: 0.4, // Shrink effect
                opacity: 0, // Fade out
              }
            : {}
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      >
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
    </motion.div>
  );
};

export default LoadingScreen;
