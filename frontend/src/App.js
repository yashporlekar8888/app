import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { motion, useScroll, useTransform } from "framer-motion";

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  
  // Create parallax backgrounds
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  useEffect(() => {
    // Add smooth scrolling to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Remove the heavy CSS background and let Framer Motion handle it
    document.body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
    document.body.style.backgroundAttachment = 'fixed';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 -z-20"
        style={{ 
          y: backgroundY, 
          opacity: backgroundOpacity,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-white/80"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-gray-300/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-br from-gray-400/10 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
