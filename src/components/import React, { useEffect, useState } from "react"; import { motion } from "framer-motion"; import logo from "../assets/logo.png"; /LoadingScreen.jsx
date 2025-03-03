import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // Ensure your logo is in the correct path

const LoadingScreen = ({ onLoaded }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onLoaded) onLoaded();
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup function
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-[#0a0a0a] z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.img
            src={logo}
            alt="NeuraWeb Logo"
            className="h-24 w-24 drop-shadow-xl animate-glow"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
