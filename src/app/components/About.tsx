'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const stats = [
    { number: '2029', label: 'Graduation Year' },
    { number: 'Computer Engineering', label: 'Major' },
    { number: '2', label: 'Year Of Study' }
  ];

  const skills = [
    'Web Development',
    'UI/UX Design',
    'Engineering Design',
    'Problem Solving',
    'Research & Analysis'
  ];

  return (
    <section className="about" id="about" style={{ paddingTop: '5rem' }}>
      <h2 className="heading">
        About <span>Me</span>
      </h2>

      <div className="about-img" style={{ position: 'relative' }}>
        <Image
          src="/aaditImage-copy.png"
          alt="Aadit Gupta"
          width={300}
          height={300}
          priority
        />
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
        <h3 style={{ marginBottom: '1rem' }}>
          Engineering Student & <span>Creative Developer</span>
        </h3>
        
        <p style={{ marginBottom: '2rem' }}>
          I'm a passionate engineering student at the University of Toronto with a keen interest in 
          creating innovative solutions through technology and design. I enjoy exploring the intersection 
          of engineering principles, user experience, and cutting-edge web technologies.
        </p>

        {/* Expandable Content - Only the 2 paragraphs */}
        {showMore && (
          <div style={{ 
            marginBottom: '2rem',
            animation: 'fadeIn 0.5s ease-in'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              My journey in engineering has led me to work on diverse projects ranging from AI ethics 
              research to product design specifications. I believe in combining technical expertise with 
              creative problem-solving to build meaningful and impactful solutions.
            </p>

            <p style={{ marginBottom: '2rem' }}>
              When I'm not coding or designing, you can find me exploring new technologies, working on 
              personal projects, or contributing to the engineering community through research and innovation.
            </p>
          </div>
        )}

        {/* Read More Button */}
        <div style={{ textAlign: 'center', marginBottom: 'rem' }}>
          <button 
            onClick={() => setShowMore(!showMore)}
            style={{
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              border: 'none',
              color: 'rgba(237, 237, 237, 0.6)',
              fontSize: '1.4rem',
              fontWeight: '400',
              padding: '0.5rem 1rem',
              transition: 'color 0.3s ease',
              fontFamily: 'Poppins, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--main-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(237, 237, 237, 0.6)';
            }}
          >
            {showMore ? 'Show less' : 'Read more'}
            <svg 
              width="12" 
              height="12" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{
                transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </button>
        </div>

        {/* Skills - Always Shown */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ 
            fontSize: '2rem', 
            color: 'var(--main-color)',
            marginBottom: '1.5rem',
            fontWeight: '600',
            textAlign: 'center'
          }}>
            Areas of Interest
          </h4>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1rem',
            justifyContent: 'center'
          }}>
            {skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: '0.8rem 1.5rem',
                  fontSize: '1.4rem',
                  fontWeight: '500',
                  background: 'rgba(0, 171, 240, 0.1)',
                  color: 'var(--main-color)',
                  borderRadius: '0.5rem',
                  border: '0.1rem solid rgba(0, 171, 240, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 171, 240, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 171, 240, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats - Always Shown */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
          gap: '2rem',
          marginTop: '3rem',
          marginBottom: '3rem'
        }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'rgba(0, 171, 240, 0.05)',
                border: '0.2rem solid rgba(0, 171, 240, 0.2)',
                borderRadius: '0.8rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--main-color)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 171, 240, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                color: 'var(--main-color)',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1.4rem',
                color: 'rgba(237, 237, 237, 0.7)'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}