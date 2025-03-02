import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";
import Reveal from "./Reveal";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projects = [
  {
    img: project1,
    title: "Custom Website Development",
    description: "Tailor-made websites that align with your business goals.",
  },
  {
    img: project2,
    title: "E-commerce Development",
    description: "Scalable online stores built with modern frameworks.",
  },
  {
    img: project4,
    title: "SaaS Development",
    description: "Cloud-based software solutions for businesses.",
  },
  {
    img: project5,
    title: "Landing Pages & Portfolio Sites",
    description: "High-converting, sleek designs for personal and business needs.",
  },
  {
    img: project6,
    title: "Web App Development",
    description: "Interactive and high-performance web applications.",
  },
];

const Portfolio = () => {
  const [likedProjects, setLikedProjects] = useState({});
  const [appliedProjects, setAppliedProjects] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [email, setEmail] = useState("");

  // Load likes and applications from localStorage
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProjects")) || {};
    const savedApplications = JSON.parse(localStorage.getItem("appliedProjects")) || {};
    setLikedProjects(savedLikes);
    setAppliedProjects(savedApplications);
  }, []);

  // Handle like toggle
  const handleLike = (index) => {
    setLikedProjects((prev) => {
      const updatedLikes = { ...prev, [index]: !prev[index] };
      localStorage.setItem("likedProjects", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  // Open modal when "Apply" is clicked
  const openApplyModal = (index) => {
    setSelectedProject(index);
    setShowModal(true);
  };

  // Handle applying with email
  const handleApply = () => {
    if (!email.trim()) return alert("Please enter a valid email!"); // Validate email input

    setAppliedProjects((prev) => {
      const updatedApplications = { ...prev, [selectedProject]: email };
      localStorage.setItem("appliedProjects", JSON.stringify(updatedApplications));
      return updatedApplications;
    });

    setShowModal(false);
    setEmail("");
  };

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="services">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Services</h2>
      <p>Note: Your Application Will Be Saved In Backend</p>

      {projects.map((project, index) => (
        <Reveal key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12 bg-gray-900 p-6 rounded-lg shadow-lg overflow-hidden`}
          >
            <motion.div
              className="w-full md:w-1/2 p-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Apply Button */}
              <motion.button
                whileHover={{ scale: appliedProjects[index] ? 1 : 1.1 }}
                whileTap={{ scale: appliedProjects[index] ? 1 : 0.9 }}
                onClick={() => openApplyModal(index)}
                disabled={appliedProjects[index]} // Disable if applied
                className={`px-6 py-3 rounded-lg transition duration-300 shadow-lg ${
                  appliedProjects[index]
                    ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                    : "bg-purple-500 text-white hover:bg-purple-600"
                }`}
              >
                {appliedProjects[index] ? "Applied" : "Apply"}
              </motion.button>

              {/* Like Button */}
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                onClick={() => handleLike(index)}
                className={`mt-3 p-2 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 shadow-md ${
                  likedProjects[index]
                    ? "bg-red-500 shadow-lg scale-110"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                <AiFillHeart
                  className={`text-lg ${likedProjects[index] ? "text-white" : "text-gray-300"}`}
                />
              </motion.button>
            </div>
          </motion.div>
        </Reveal>
      ))}

      {/* Popup Modal for Email Input */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-80"
          >
            <h2 className="text-lg font-semibold mb-4">Enter Your Email</h2>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md text-black"
            />
            <div className="flex justify-between mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-red-500 px-4 py-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500 px-4 py-2 rounded-lg"
                onClick={handleApply}
              >
                Apply
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
