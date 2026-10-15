import React, { useState, useEffect } from 'react';
import { CanvasBackground } from './components/CanvasBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoAbout } from './components/BentoAbout';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BGMPlayer } from './components/BGMPlayer';

export function App() {
  const [currentTheme, setCurrentTheme] = useState('cyan');

  useEffect(() => {
    // Apply data-theme to HTML root
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Interactive Canvas Starfield Constellation */}
      <CanvasBackground />

      {/* Radiant Glow Mesh Orbs in the background */}
      <div className="bg-glow-orb bg-glow-orb-1" />
      <div className="bg-glow-orb bg-glow-orb-2" />
      <div className="bg-glow-orb bg-glow-orb-3" />

      {/* Subtle Grid Noise Pattern */}
      <div className="bg-grid-pattern" />

      {/* Floating Modern Header */}
      <Navbar currentTheme={currentTheme} setTheme={setCurrentTheme} />

      {/* Page Content */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <BentoAbout />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating BGM Player */}
      <BGMPlayer />
    </div>
  );
}

export default App;
