import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  { title: "Frontend Development", skills: "React.js, Next.js, Tailwind CSS." },
  { title: "Backend Development", skills: "Node.js, Express.js, REST APIs." },
  { title: "Database Management", skills: "MongoDB, Firebase, MySQL." },
  { title: "Machine Learning", skills: "Python, TensorFlow, Scikit-Learn." },
  { title: "Cloud & Deployment", skills: "AWS, Vercel, Firebase." },
  { title: "Performance Optimization", skills: "Fast-loading, SEO-friendly websites." },
];

const Experience = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-16" id="Technologies">
      {/* Section Title */}
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Our Expertise & Technologies
      </h1>

      {/* Experience Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {experiences.map(({ title, skills }, index) => (
          <Reveal key={index}>
            <motion.div
              whileHover={{ 
                y: -10, 
                scale: 1.05, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="border border-purple-600 p-6 rounded-lg bg-purple-700/10 
              shadow-lg shadow-purple-500/50 h-[200px] flex flex-col justify-center items-center text-center 
              transition-all duration-300 ease-in-out"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">{title}</h2>
              <p className="text-gray-400 mt-4">{skills}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
