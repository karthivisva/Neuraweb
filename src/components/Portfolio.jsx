
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
  { img: project1, title: "Custom Website Development", description: "Tailor-made websites that align with your business goals." },
  { img: project2, title: "E-commerce Development", description: "Scalable online stores built with modern frameworks." },
  { img: project4, title: "SaaS Development", description: "Cloud-based software solutions for businesses." },
  { img: project5, title: "Landing Pages & Portfolio Sites", description: "High-converting, sleek designs for personal and business needs." },
  { img: project6, title: "Web App Development", description: "Interactive and high-performance web applications." },
];

const Portfolio = () => {
  const [likedProjects, setLikedProjects] = useState({});
  const [appliedProjects, setAppliedProjects] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    setLikedProjects(JSON.parse(localStorage.getItem("likedProjects")) || {});
    setAppliedProjects(JSON.parse(localStorage.getItem("appliedProjects")) || {});
  }, []);

  const handleLike = (index) => {
    setLikedProjects((prev) => {
      const updatedLikes = { ...prev, [index]: !prev[index] };
      localStorage.setItem("likedProjects", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  const openApplyModal = (index) => {
    setSelectedProject(index);
    setShowModal(true);
    setEmail("");
    setEmailError("");
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(isValidEmail(e.target.value) ? "" : "Invalid email format.");
  };

  const handleApply = async () => {
    if (!isValidEmail(email)) {
      setEmailError("Invalid email format.");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("project", projects[selectedProject].title);

    try {
      const response = await fetch("https://getform.io/f/awnqwpzb", {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", response.status);
      console.log("Response:", response);

      if (response.ok) {
        setAppliedProjects((prev) => {
          const updatedApplications = { ...prev, [selectedProject]: email };
          localStorage.setItem("appliedProjects", JSON.stringify(updatedApplications));
          return updatedApplications;
        });

        alert("Application submitted successfully! You'll receive a notification on ," + email);
        setShowModal(false);
        setEmail("");
      } else {
        alert("Failed to submit. Check your GetForm endpoint.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Check console for details.");
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="services">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Services</h2>
      <p className="text-white-500 text-sm">Note: <span className="text-red-500">*</span> Your Application Will Be Saved</p>

      {projects.map((project, index) => (
        <Reveal key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} mb-12 bg-gray-900 p-6 rounded-lg shadow-lg overflow-hidden`}
          >
            <motion.div className="w-full md:w-1/2 p-4">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </motion.div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openApplyModal(index)}
                disabled={appliedProjects[index]}
                className={`px-6 py-3 rounded-lg transition duration-300 shadow-lg ${appliedProjects[index] ? "bg-gray-500 text-gray-300 cursor-not-allowed" : "bg-purple-500 text-white hover:bg-purple-600"}`}
              >
                {appliedProjects[index] ? "Applied" : "Apply"}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleLike(index)}
                className={`mt-3 p-2 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 shadow-md ${likedProjects[index] ? "bg-red-500 shadow-lg scale-110" : "bg-gray-700 hover:bg-gray-600"}`}
              >
                <AiFillHeart className={`text-lg ${likedProjects[index] ? "text-white" : "text-gray-300"}`} />
              </motion.button>
            </div>
          </motion.div>
        </Reveal>
      ))}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="bg-[#e806c6] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">Enter Your Email</h2>
            <input type="email" value={email} onChange={handleEmailChange} className="p-2 border rounded w-full" placeholder="Email" />
            {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
            <div className="flex justify-between mt-4">
              <button onClick={handleApply} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
              <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
