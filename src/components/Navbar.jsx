import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const menuItems = ["about", "services", "Technologies"];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav((prev) => !prev);
  const closeNav = () => setNav(false);

  // Animation Variants
  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 70, damping: 12 } },
    closed: { x: "-100%", opacity: 0, transition: { type: "spring", stiffness: 70, damping: 12 } },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center text-white text-xl px-6 md:px-12 h-20">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-12 w-12 object-cover rounded-full" />
          <a href="/Neuraweb.io" className="font-bold text-white text-2xl">NEURAWEB</a>
        </div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex gap-12 cursor-pointer"
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              transition={{ duration: 0.3 }}
            >
              <Link to={item} smooth={true} offset={-80} duration={500}>
                {item.toUpperCase()}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleNav}
          className="md:hidden z-50 text-gray-200 cursor-pointer"
          aria-label="Toggle menu"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>

        {/* Mobile Menu & Backdrop */}
        <AnimatePresence>
          {nav && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40"
                onClick={closeNav}
              />
              
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed left-0 top-0 w-3/4 sm:w-1/2 min-h-screen bg-gradient-to-r from-[#7f00ed] to-white shadow-lg z-50 p-6 rounded-r-lg"
              >
                <ul className="font-semibold text-2xl space-y-8 mt-16 text-center">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.1, color: "#60a5fa" }}
                      whileTap={{ scale: 0.95 }}
                      className="block py-3 text-white transition duration-300"
                    >
                      <Link to={item} onClick={closeNav} smooth={true} offset={-80} duration={500}>
                        {item.toUpperCase()}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
