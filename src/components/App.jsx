import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import FinalNotes from './FinalNotes/FinalNotes';
import Navbar from './Navbar/Navbar';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  experienceData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setExperience([...experienceData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <>
      <Navbar />
      <PortfolioProvider value={{ hero, about, projects, contact, footer, experiences }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <FinalNotes />
        <Contact />
        <Footer />
      </PortfolioProvider>
    </>
  );
}

export default App;
