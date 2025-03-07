import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal"; // ✅ Reusing animation wrapper

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
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-200" id="services">
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

      <div className="grid gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
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
