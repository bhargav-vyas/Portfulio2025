import React from 'react';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkillsSection from './components/SkillsSection';
function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Projects />
     <SkillsSection/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;