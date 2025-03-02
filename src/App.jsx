import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ThemeProvider, useTheme } from './Components/ThemeProvider/ThemeProvider';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import ContactSection from './Components/ContactSection/ContactSection';
import SkillsAndTechnologies from './Components/SkillsAndTechnologies/SkillsAndTechnologies';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
import Project from './Components/ProjectPage/Projects';


function App() {
  return (
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
  );
}

function MainComponent() {
  const { theme } = useTheme();
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div style={{ backgroundColor: theme === 'Dark' ? 'black' : 'white' }} className="main">
      <Navbar contactRef={contactRef} homeRef={homeRef}/>
      <HeroSection ref={homeRef}/>
      <AboutMe />
      <SkillsAndTechnologies />
      <Project/>
      <Experience />
      <Testimonial />
      <ContactSection ref={contactRef}/>
      <Footer />
    </div>
  );
}

export default App;
