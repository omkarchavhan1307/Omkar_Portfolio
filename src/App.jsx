import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CanvasParticles from './components/CanvasParticles/CanvasParticles';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import { EducationTimeline, ExperienceTimeline } from './components/Timeline/Timeline';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function MainPortfolio() {
  return (
    <>
      <Hero />
      <About />
      <EducationTimeline />
      <ExperienceTimeline />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <CanvasParticles />
      <ScrollProgress />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
