import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Replace with your logo path

const LoadingScreen = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 2500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.img
        src={logo}
        alt="Loading..."
        className="w-32 h-32 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1], // Pulse effect
          rotate: [0, 10, -10, 0], // Subtle tilt effect
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default LoadingScreen;
