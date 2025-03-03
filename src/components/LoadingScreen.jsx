import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Your logo

const LoadingScreen = ({ onLoaded }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Prevents white flash by setting black background on body
    document.body.style.backgroundColor = "#000";

    const timer = setTimeout(() => {
      setIsExiting(true); // Start exit animation
      setTimeout(() => {
        onLoaded(); // Call the parent function after animation
        document.body.style.backgroundColor = ""; // Reset background after load
      }, 800); // Faster exit for smooth transition
    }, 2000); // Reduced initial wait time for better UX

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0 } : {}}
      transition={{ duration: 0.6 }} // Faster fade-out
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={
          isExiting
            ? {
                x: "-40vw", // Moves to left
                y: "-35vh", // Moves to top
                scale: 0.5, // Shrinks
                opacity: 0, // Fades out
              }
            : {}
        }
        transition={{ duration: 0.8, ease: "easeInOut" }} // Faster & smoother
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
