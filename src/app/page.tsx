'use client';
import Header from './components/Header';
import HomeSection from './components/Home';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import Education from './components/Education';
import About from './components/About';
import Footer from './components/Footer';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {

  return (
    <>
      <Header />

      <main>
        {/* Home Section */}
        <HomeSection />

        {/* About Section */}
        <About />

        {/* Education Section */}
        <Education />
        
        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
