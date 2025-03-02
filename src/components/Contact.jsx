import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="about">
      <Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 place-items-center gap-12"
        >
          {/* About Us Section */}
          <motion.div className="text-gray-300 my-3 space-y-6">
            <h3 className="text-4xl font-semibold text-white">
              About <span className="text-purple-400 glow-text">NeuraWeb</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              At <span className="text-purple-400 glow-text">NeuraWeb</span>, we are passionate full-stack developers committed to crafting
              fast, responsive, and intuitive web applications. Whether it’s a
              portfolio, e-commerce platform, or SaaS product, we turn your
              vision into reality with cutting-edge technologies.
            </p>
            <h3 className="text-4xl font-semibold text-white">
              Why Choose <span className="text-purple-400 glow-text">Us</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              <span className="glow-text"> Custom Web Development</span> - Tailored solutions for your business.<br />
              <span className="glow-text"> Cutting-Edge Tech Stack</span> - React, Node.js, MongoDB, and more.<br />
              <span className="glow-text"> Optimized Performance</span> - Speed, security, and scalability.<br />
              <span className="glow-text"> End-to-End Solutions</span> - UI/UX to backend development.<br />
              Based in India, run by tech enthusiasts turning ideas into reality!
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-3xl font-semibold text-white mb-4">Send Us a Message</h3>
            <form action="https://getform.io/f/awnqwpzb" method="POST" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
                required
              />
              <input
                type="text"
                name="message"
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </Reveal>
    </div>
  );
};

export default Contact;
