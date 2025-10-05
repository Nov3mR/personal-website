'use client';
import { useEffect, useRef, useState } from 'react';

export default function SkillsSection() {
  // Organize skills by category with icons and proficiency levels
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React & Next.js', level: 90, color: '#61DAFB' },
        { name: 'HTML & CSS', level: 95, color: '#E34F26' },
        { name: 'JavaScript/TypeScript', level: 85, color: '#F7DF1E' },
        { name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
      ]
    },
    {
      title: 'Backend & Tools',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 85, color: '#3776AB' },
        { name: 'Node.js', level: 75, color: '#339933' },
        { name: 'Git & GitHub', level: 90, color: '#F05032' },
        { name: 'APIs & Databases', level: 80, color: '#4479A1' },
      ]
    },
    {
      title: 'Design & Soft Skills',
      icon: '✨',
      skills: [
        { name: 'UI/UX Design', level: 85, color: '#FF6B6B' },
        { name: 'Problem Solving', level: 92, color: '#4ECDC4' },
        { name: 'Team Collaboration', level: 88, color: '#95E1D3' },
        { name: 'Communication', level: 90, color: '#F38181' },
      ]
    }
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation every time the section comes into view
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Intermediate';
  };

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <p style={{
        textAlign: 'center',
        fontSize: '1.6rem',
        color: 'rgba(237, 237, 237, 0.7)',
        maxWidth: '70rem',
        margin: '0 auto 5rem',
        lineHeight: '1.8'
      }}>
        A comprehensive overview of my technical expertise and professional capabilities
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(35rem, 1fr))',
        gap: '3rem',
        maxWidth: '120rem',
        margin: '0 auto'
      }}>
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(0, 171, 240, 0.2)',
              borderRadius: '1.5rem',
              padding: '3rem',
              transition: 'all 0.4s ease',
              animation: inView ? `fadeInUp 0.6s ease-out ${categoryIndex * 0.15}s backwards` : 'none',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'var(--main-color)';
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 171, 240, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(0, 171, 240, 0.2)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Category Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginBottom: '3rem',
              paddingBottom: '2rem',
              borderBottom: '2px solid rgba(0, 171, 240, 0.2)'
            }}>
              <div style={{
                fontSize: '3.5rem',
                filter: 'drop-shadow(0 0 10px rgba(0, 171, 240, 0.3))'
              }}>
                {category.icon}
              </div>
              <h3 style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                color: 'var(--text-color)',
                margin: 0
              }}>
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    animation: inView ? `fadeInUp 0.5s ease-out ${(categoryIndex * 0.15) + (skillIndex * 0.1)}s backwards` : 'none'
                  }}
                >
                  {/* Skill Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      fontSize: '1.6rem',
                      fontWeight: '600',
                      color: 'var(--text-color)',
                      transition: 'color 0.3s ease'
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      color: 'var(--main-color)',
                      minWidth: '4.5rem',
                      textAlign: 'right'
                    }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div style={{
                    width: '100%',
                    height: '1.2rem',
                    background: 'rgba(0, 171, 240, 0.1)',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2) inset'
                  }}>
                    {/* Progress Bar Fill */}
                    <div style={{
                      height: '100%',
                      width: inView ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, var(--main-color))`,
                      borderRadius: '1rem',
                      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${(categoryIndex * 0.15) + (skillIndex * 0.1)}s`,
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: `0 0 20px ${skill.color}40`
                    }}>
                      {/* Shine Effect */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                        animation: hoveredSkill === skill.name ? 'shine 1.5s infinite' : 'none'
                      }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}