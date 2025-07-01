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

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
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
      <main className="relative flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Shell />
      </main>
    </div>
  );
}

export default App;
