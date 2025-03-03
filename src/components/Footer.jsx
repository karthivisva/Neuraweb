import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const shadowAnimation = {
  boxShadow: [
    "0px 0px 20px rgba(138, 5, 187, 0.5)",
    "0px 0px 40px rgba(138, 5, 187, 0.8)",
    "0px 0px 20px rgba(138, 5, 187, 0.5)",
  ],
  scale: [1, 1.02, 1],
  transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
};

const socialIcons = [
  { href: "https://github.com/karthivisva", icon: <FaGithub />, hoverColor: "text-white" },
  { href: "https://www.instagram.com/neuraweb.io", icon: <FaInstagram />, hoverColor: "text-pink-500" },
];

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="w-full text-gray-300 py-16 px-8 md:py-20 md:px-12"
    >
      <motion.div
        animate={shadowAnimation}
        className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-16 rounded-lg text-center md:text-left"
      >
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-gray-400 text-sm">Designed & Developed by</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Karthik.R</h3>
          <p className="text-gray-400 text-sm">Founder Of NeuraWeb</p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {socialIcons.map(({ href, icon, hoverColor }, index) => (
              <motion.a
                key={index}
                href={href}
                className={`text-2xl md:text-3xl text-gray-400 hover:${hoverColor} transition`}
                whileHover={{ scale: 1.2 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm md:text-md text-center w-full">
          © 2025 NeuraWeb | All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
