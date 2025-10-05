'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));

    const handleScroll = () => {
      const top = window.scrollY;
      let foundSection = '';
      let foundSectionIndex = -1;

      // Find the current section and its index
      sections.forEach((sec, index) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id') || '';

        if (top >= offset && top < offset + height) {
          foundSection = id;
          foundSectionIndex = index;
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });

      // Update active section
      if (foundSection) {
        setActiveSection(foundSection);
      }

      // Determine if header should have 'odd' class based on section index
      // CSS uses nth-of-type(even), which means 2nd, 4th, 6th sections (index 1, 3, 5)
      const isEvenSection = foundSectionIndex !== -1 && (foundSectionIndex + 1) % 2 === 0;
      setSticky(top > 100);
      
      // Update header class based on section position
      const header = document.querySelector('.header');
      if (header) {
        if (isEvenSection) {
          header.classList.add('odd');
        } else {
          header.classList.remove('odd');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setActiveMenu(false);
  };

  return (
    <header className={`header ${sticky ? 'sticky' : ''}`}>
      <a href="#home" className="logo" onClick={handleNavClick}>Aadit.</a>
      
      <div
        id="menu-icon"
        className={`bx ${activeMenu ? 'bx-x' : 'bx-menu'}`}
        onClick={() => setActiveMenu(!activeMenu)}
        role="button"
        aria-label={activeMenu ? 'Close menu' : 'Open menu'}
        aria-expanded={activeMenu}
      ></div>

      <nav className={`navbar ${activeMenu ? 'active' : ''}`}>
        <div className="active-nav"></div>
        <a 
          href="#home" 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={handleNavClick}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={handleNavClick}
        >
          About
        </a>
        <a 
          href="#education" 
          className={activeSection === 'education' ? 'active' : ''}
          onClick={handleNavClick}
        >
          Education
        </a>
        <a 
          href="#projects" 
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={handleNavClick}
        >
          Projects
        </a>
        <a 
          href="#skills" 
          className={activeSection === 'skills' ? 'active' : ''}
          onClick={handleNavClick}
        >
          Skills
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={handleNavClick}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}