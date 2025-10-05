'use client';

import { useState, useEffect } from 'react';

export default function HomeSection() {
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Edit these phrases to customize what gets typed
  const phrases = [
    'Computer Engineering Student',
    'Full-Stack Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && typedText === currentPhrase) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentPhraseIndex, isPaused]);

  return (
    <section className="home show-animate" id="home">
      <div 
        className="home-content" 
        style={{ maxWidth: '65rem' }}
      >
        {/* Small intro label */}
        <div style={{
          display: 'inline-block',
          padding: '0.8rem 2rem',
          background: 'rgba(0, 171, 240, 0.1)',
          border: '1px solid rgba(0, 171, 240, 0.3)',
          borderRadius: '5rem',
          fontSize: 'clamp(1.2rem, 2vw, 1.4rem)',
          color: 'var(--main-color)',
          fontWeight: '600',
          marginBottom: '2rem',
          letterSpacing: '0.1rem'
        }}>
          👋 WELCOME TO MY WEBSITE
        </div>

        <h1 style={{ 
          marginBottom: '1.5rem',
          fontSize: 'clamp(3rem, 6vw, 5.6rem)',
          lineHeight: '1.2'
        }}>
          Hi, I'm <span style={{ color: 'var(--main-color)' }}>Aadit Gupta</span>
        </h1>
        
        {/* Custom Typing Animation */}
        <div style={{ 
          marginBottom: '2rem',
          minHeight: 'clamp(2.5rem, 5vw, 4rem)'
        }}>
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: '700',
            color: 'transparent',
            WebkitTextStroke: '.7px var(--main-color)',
            display: 'inline-block',
            position: 'relative'
          }}>
            {typedText}
            <span style={{
              borderRight: '3px solid var(--main-color)',
              marginLeft: '2px',
              animation: 'cursorBlink 0.8s ease-in-out infinite',
              display: 'inline-block'
            }}></span>
          </h3>
        </div>

        <p style={{ 
          fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', 
          lineHeight: '1.8',
          marginBottom: '4rem',
          color: 'rgba(237, 237, 237, 0.85)'
        }}>
          Passionate about building innovative solutions at the intersection of engineering, 
          design, and technology. Currently pursuing Computer Engineering at the University of Toronto.
        </p>

        {/* CTA Section with prominent resume */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Resume - Hero Element */}
          <a 
            href="/documents/Aadit_Gupta_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download my resume - View qualifications, experience and projects"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              alignItems: 'center',
              padding: '2.5rem 3rem',
              background: isResumeHovered 
                ? 'linear-gradient(135deg, rgba(0, 171, 240, 0.25), rgba(0, 171, 240, 0.15))'
                : 'linear-gradient(135deg, rgba(0, 171, 240, 0.15), rgba(0, 171, 240, 0.05))',
              border: '2px solid var(--main-color)',
              borderRadius: '1.2rem',
              textDecoration: 'none',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease, box-shadow 0.4s ease',
              transform: isResumeHovered ? 'translateX(8px)' : 'translateX(0)',
              boxShadow: isResumeHovered ? '0 10px 40px rgba(0, 171, 240, 0.3)' : 'none',
              gap: '2rem',
              willChange: 'transform'
            }}
            onMouseEnter={() => setIsResumeHovered(true)}
            onMouseLeave={() => setIsResumeHovered(false)}
            onFocus={() => setIsResumeHovered(true)}
            onBlur={() => setIsResumeHovered(false)}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: '2rem' }}>
              <div style={{
                width: '5.5rem',
                height: '5.5rem',
                background: 'var(--main-color)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="28" height="28" fill="var(--bg-color)" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                  <path d="M8 12h8v2H8v-2zm0 4h5v2H8v-2z"/>
                </svg>
              </div>
              
              <div>
                <div style={{
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  color: 'var(--text-color)',
                  lineHeight: '1',
                  marginBottom: '0.5rem'
                }}>
                  Download My Resume
                </div>
                <div style={{
                  fontSize: '1.4rem',
                  color: 'rgba(0, 171, 240, 0.9)',
                  fontWeight: '500',
                  lineHeight: '1'
                }}>
                  View qualifications, experience & projects
                </div>
              </div>
            </div>

            <svg 
              width="32" 
              height="32" 
              fill="none" 
              stroke="var(--main-color)" 
              viewBox="0 0 24 24"
              style={{ 
                transition: 'transform 0.4s ease',
                transform: isResumeHovered ? 'translateX(5px)' : 'translateX(0)'
              }}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Secondary CTAs */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <a 
              href="#projects" 
              className="btn"
              style={{
                flex: '1',
                minWidth: 'clamp(18rem, 30vw, 20rem)',
                textAlign: 'center',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.7rem)',
                padding: '1.5rem 2.5rem',
                display: 'inline-block',
                textDecoration: 'none'
              }}
            >
              View Projects
            </a>
            
            <a 
              href="#contact" 
              className="btn"
              style={{
                flex: '1',
                minWidth: 'clamp(18rem, 30vw, 20rem)',
                textAlign: 'center',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.7rem)',
                padding: '1.5rem 2.5rem',
                display: 'inline-block',
                textDecoration: 'none'
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="home-sci">
        <a 
          href="https://github.com/yourusername" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/aadit-gupta-1411ag" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with me on LinkedIn"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a 
          href="mailto:aadit.gupta@mail.utoronto.ca"
          aria-label="Send me an email"
        >
          <i className="bx bx-envelope"></i>
        </a>
      </div>

      <div className="home-imgHover"></div>

      <style jsx>{`
        @keyframes cursorBlink {
          0%, 49% {
            opacity: 1;
            border-right-color: var(--main-color);
          }
          50%, 100% {
            opacity: 0;
            border-right-color: transparent;
          }
        }
      `}</style>
    </section>
  );
}