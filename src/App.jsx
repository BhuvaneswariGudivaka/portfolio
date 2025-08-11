import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import Certifications from './components/Certifications';
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';

export default function App() {
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
