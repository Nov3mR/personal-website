'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));

    const handleScroll = () => {
      const top = window.scrollY;

      sections.forEach(sec => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id') || '';

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });

      setSticky(top > 100);
      setActiveMenu(false);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${sticky ? 'sticky' : ''} ${activeSection === 'about' || activeSection === 'skills' ? 'odd' : ''}`}>
      <a href="#" className="logo">Aadit.</a>
      <div
        id="menu-icon"
        className={`bx bx-menu ${activeMenu ? 'bx-x' : ''}`}
        onClick={() => setActiveMenu(!activeMenu)}
      ></div>
      <nav className={`navbar ${activeMenu ? 'active' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </nav>
    </header>
  );
}
