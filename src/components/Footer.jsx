import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full text-gray-300 py-16 px-8 md:py-20 md:px-12 overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Main Footer Content */}
      <motion.div
        animate={{
          boxShadow: [
            "0px 0px 20px rgba(138, 5, 187, 0.5)",
            "0px 0px 40px rgba(138, 5, 187, 0.8)",
            "0px 0px 20px rgba(138, 5, 187, 0.5)",
          ],
          scale: [1, 1.02, 1],
        }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-16 rounded-lg text-center md:text-left"
      >
        {/* Left Section */}
        <div className="md:flex md:items-center md:gap-8 w-full justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">R. Karthik</h3>
            <p className="text-gray-400 text-sm mt-2">Building digital experiences with passion.</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/karthivisva"
              className="text-2xl md:text-3xl text-gray-400 hover:text-white transition relative"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/neuraweb.io?igsh=MXM4dmEwd29rNzY2cw=="
              className="text-2xl md:text-3xl text-gray-400 hover:text-pink-500 transition relative"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm md:text-md mt-4 md:mt-0 text-center md:text-left w-full">
          © 2025 NeuraWeb | All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;