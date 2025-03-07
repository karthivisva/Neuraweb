import React from "react"
import { motion } from "framer-motion"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
} from "react-icons/di"
import { FaServer } from "react-icons/fa" // Express.js placeholder icon
import Reveal from "./Reveal"

// Define skill categories
const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Sass", icon: <DiSass className="text-pink-600" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "Express.js", icon: <FaServer className="text-gray-500" /> }, // Fixed Express.js icon
    ],
  },
]

const Skills = () => {
  return (
    <div className="max-w-[750px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      <Reveal>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Technology
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          We worked on various frontend and fullstack projects.
        </motion.p>

        {/* Skill Cards */}
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg hover:shadow-purple-500/40 transition duration-300 w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <span className="text-3xl">{tech.icon}</span>
                    <span className="text-lg">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

const Services = () => {
  const services = ["Web Development", "UI/UX Design", "SEO Optimization", "Mobile App Development", "E-commerce Solutions"];

  return (
    <div className="max-w-[750px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="services">
      <Reveal>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Our Services
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-4"
        >
          {services.map((service, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border border-purple-900 p-4 rounded-lg bg-purple-900/20 shadow-lg hover:shadow-purple-500/40 transition duration-300"
            >
              {service}
            </motion.li>
          ))}
        </motion.ul>
      </Reveal>
    </div>
  );
};

export { Skills, Services };
