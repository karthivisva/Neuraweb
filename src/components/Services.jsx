import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal"; // ✅ Animation Wrapper

// List of services
const services = [
  { title: "Web Development", description: "Building modern and responsive websites." },
  { title: "Full-Stack Solutions", description: "Complete frontend & backend development." },
  { title: "E-Commerce", description: "Creating high-performing online stores." },
  { title: "SEO Optimization", description: "Boosting website rankings on search engines." },
  { title: "UI/UX Design", description: "Designing beautiful and intuitive user interfaces." },
  { title: "Machine Learning Solutions", description: "Integrating AI into web applications." }
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
          Our Services
        </motion.h2>
      </Reveal>

      {/* Desktop View: Horizontal Scrolling */}
      <div className="hidden md:block w-full overflow-hidden relative">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 20, // Adjust speed
            repeat: Infinity, // Loop infinitely
          }}
        >
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[300px] p-6 border border-purple-900 bg-purple-900/20 rounded-lg shadow-lg hover:shadow-purple-500/40 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile View: Stacked Services */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 border border-purple-900 bg-purple-900/20 rounded-lg shadow-lg hover:shadow-purple-500/40 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
