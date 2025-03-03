import { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion"; // Import Framer Motion for animation
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  // Ensure the page always loads from the top
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="skills">
          <Skills />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Floating Email Button with Animation */}
      <motion.a
        href="mailto:neurawebindia@gmail.com" // Replace with your actual email
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center text-3xl"
        style={{ zIndex: 1000 }}
        initial={{ y: 0 }} // Starting position
        animate={{ y: [0, -8, 0] }} // Bounce animation
        transition={{
          duration: 1.5, // Animation duration
          repeat: Infinity, // Repeat animation forever
          ease: "easeInOut", // Smooth animation
        }}
      >
        <AiOutlineMail />
      </motion.a>
    </>
  );
}
