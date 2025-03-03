import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Replace with your logo path

const LoadingScreen = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.img
        src={logo}
        alt="Loading..."
        className="w-32 h-32"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default LoadingScreen;
