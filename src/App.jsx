import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import Certifications from './components/Certifications';
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen'; // new component

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait until everything is loaded OR 3 seconds pass
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);

    const timer = setTimeout(() => setLoading(false), 3000);
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Navbar />
      <main className='pt-20'>
        <section id='home'><Hero /></section>
        <section id='about'><About /></section>
        <section id='education'><Education /></section>
        <section id='projects'><Projects /></section>
        <section id='experience'><ProfessionalExperience /></section>
        <section id='certifications'><Certifications /></section>
        <section id='skills'><TechnicalSkills /></section>
        <section id='contact'><Contact /></section>
      </main>
    </div>
  );
}
