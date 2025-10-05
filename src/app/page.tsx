'use client';
import Header from './components/Header';
import HomeSection from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from "./components/Projects";
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';


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

        {/* Projects Section */}
        <Projects />

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
