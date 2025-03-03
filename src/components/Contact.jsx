import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const isValidEmail = useCallback((email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }, []);

  const handleEmailChange = useCallback((e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(isValidEmail(value) ? "" : "Invalid email format");
  }, [isValidEmail]);

  const handleSubmit = (e) => {
    if (!isValidEmail(email)) {
      e.preventDefault(); // Prevent form submission
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 space-y-6"
        >
          <h3 className="text-3xl font-semibold text-white">
            About <span className="text-purple-400">NeuraWeb</span>
          </h3>
          <p className="text-justify leading-7">
            At <span className="text-purple-400">NeuraWeb</span>, we specialize in building fast, responsive, and
            intuitive web applications. Whether it’s a portfolio, e-commerce
            platform, or SaaS product, we bring your ideas to life using
            cutting-edge technologies.
          </p>

          <h3 className="text-3xl font-semibold text-white">
            Why Choose <span className="text-purple-400">Us?</span>
          </h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            {[
              "Custom Web Development - Tailored solutions for your business.",
              "Modern Tech Stack - React, Node.js, MongoDB, and more.",
              "Optimized Performance - Speed, security, and scalability.",
              "End-to-End Solutions - UI/UX to backend development.",
            ].map((text, index) => (
              <li key={index}>
                <strong>{text.split(" - ")[0]}</strong> - {text.split(" - ")[1]}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Send Us a Message</h3>
          <form
            action="https://getform.io/f/ajjmokma"
            method="POST"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full p-3 rounded-md bg-gray-700 text-white border ${
                emailError ? "border-red-500" : "border-gray-600"
              } focus:outline-none focus:border-purple-400 transition`}
              required
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400 transition h-28"
              required
            ></textarea>
            <button
              type="submit"
              className={`w-full py-3 rounded-md transition duration-300 shadow-lg ${
                !email || emailError
                  ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                  : "bg-purple-500 hover:bg-purple-600 text-white"
              }`}
              disabled={!email || !!emailError}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;

