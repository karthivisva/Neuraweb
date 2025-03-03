import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Your logo

const LoadingScreen = ({ onLoaded }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Controls visibility

  useEffect(() => {
    document.body.style.backgroundColor = "#000"; // Prevent white flash

    const timer = setTimeout(() => {
      setIsExiting(true); // Start exit animation
      setTimeout(() => {
        setIsVisible(false); // Ensure complete removal
        onLoaded(); // Notify parent
        document.body.style.backgroundColor = ""; // Reset background
      }, 800); // Matches exit duration
    }, 2000); // Time before exit animation starts

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!isVisible) return null; // Prevents reappearing issue

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={
          isExiting
            ? {
                x: "-40vw", // Moves left
                y: "-35vh", // Moves up
                scale: 0.5, // Shrinks
                opacity: 0, // Fades out
              }
            : {}
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Expanding Ripple Effect */}
        <motion.div
          className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4"
          style={{ borderColor: "#7f00ed" }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />

        {/* Circular Logo with Pulse Effect */}
        <motion.img
          src={logo}
          alt="Loading..."
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1], opacity: [1, 0.9, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
