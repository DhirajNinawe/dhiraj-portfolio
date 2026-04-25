import { useState, useCallback } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Loader onComplete={handleLoadComplete} />
      {loaded && (
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Hero />
          <Skills />
          <About />
          <Projects />
          <CTA />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
