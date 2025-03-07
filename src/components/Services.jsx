import React, { useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const services = [
  { title: "Custom Web Development", description: "Building tailored web applications with full-stack technologies." },
  { title: "API Development & Integration", description: "Creating RESTful & GraphQL APIs and integrating third-party services." },
  { title: "Database Design & Management", description: "Setting up and optimizing databases like MongoDB, MySQL, and PostgreSQL." },
  { title: "Authentication & Security", description: "Implementing user authentication (JWT, OAuth) and security best practices." },
  { title: "Performance Optimization", description: "Enhancing speed, caching, and scalability for better user experience." },
  { title: "Deployment & Cloud Services", description: "Deploying applications on AWS, Vercel, or DigitalOcean with CI/CD pipelines." }
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-200 overflow-hidden" id="services">
      <Reveal>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Full-Stack Web Services
        </motion.h2>
      </Reveal>

      {/* Scrollable Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 50, // Adjust for speed
            repeat: Infinity
          }}
        >
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="min-w-[350px] md:min-w-[450px] p-8 border border-purple-900 bg-purple-900/20 rounded-lg shadow-lg hover:shadow-purple-500/40 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-lg">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
