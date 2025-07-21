// App.jsx
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import MatrixRain from "./components/MatrixRain";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Shell from "./components/Shell";

function HomePage() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

function ShellPage() {
  return (
    <div className="min-h-screen pt-16"> {/* pt-16 to account for fixed navigation */}
      <Shell />
    </div>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="h-full bg-black flex items-center justify-center">
        <div className="text-green-400 font-mono text-xl animate-pulse">
          INITIALIZING MATRIX...
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black text-green-400 font-mono">
      <MatrixRain />
      <Navigation />
      <main className="relative flex flex-col gap-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shell" element={<ShellPage />} />
          {/* Optional: fallback route */}
          <Route path="*" element={<div className="text-center p-20">404 - Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;