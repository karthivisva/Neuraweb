import { useLayoutEffect, lazy, Suspense } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

// Lazy Load Components for Performance Optimization
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Footer = lazy(() => import("./components/Footer"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Skills = lazy(() => import("./components/Skills"));

export default function App() {
  // Ensure the page always loads from the top
  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Navbar */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>

      <main className="pt-20">
        <section id="hero">
          <Suspense fallback={<div>Loading Hero...</div>}>
            <Hero />
          </Suspense>
        </section>

        <section id="skills">
          <Suspense fallback={<div>Loading Skills...</div>}>
            <Skills />
          </Suspense>
        </section>

        <section id="portfolio">
          <Suspense fallback={<div>Loading Portfolio...</div>}>
            <Portfolio />
          </Suspense>
        </section>

        <section id="experience">
          <Suspense fallback={<div>Loading Experience...</div>}>
            <Experience />
          </Suspense>
        </section>

        <section id="contact">
          <Suspense fallback={<div>Loading Contact...</div>}>
            <Contact />
          </Suspense>
        </section>
      </main>

      {/* Footer */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>

      {/* Floating Email Button */}
      <motion.a
        href="mailto:neurawebindia@gmail.com"
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center text-3xl"
        style={{ zIndex: 1000 }}
        initial={{ opacity: 0, scale: 0.8 }} // Start invisible
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }} // Bounce animation
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <AiOutlineMail />
      </motion.a>
    </>
  );
}
