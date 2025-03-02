import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  // Mobile Menu Variants
  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 12 },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 60, damping: 12 },
    },
  };

  // Menu Item Variants
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.2 * index, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center text-white text-xl px-6 md:px-12 h-20">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/src/assets/logo.jpg" alt="NeuraWeb Logo" className="h-12 w-12 object-cover rounded-full" />
          <a href="#" className="font-bold text-white text-2xl">NEURAWEB</a>
        </div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex gap-12 z-10 cursor-pointer"
        >
          {["about", "services", "experience"].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
            >
              <Link to={item} smooth={true} offset={-80} duration={500}>
                {item.toUpperCase()}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Icon */}
        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200 cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Backdrop Blur Effect */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40"
              onClick={closeNav}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-3/4 sm:w-1/2 min-h-screen bg-[#111] shadow-lg z-50 p-6 rounded-r-lg"
        >
          <ul className="font-semibold text-2xl space-y-8 mt-16 text-center">
            {["about", "services", "experience"].map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
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
      </div>
    </div>
  );
};

export default Navbar;
