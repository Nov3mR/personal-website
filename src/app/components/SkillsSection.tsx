'use client';
import { useEffect, useRef, useState } from 'react';

export default function SkillsSection() {
  const codingSkills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 80 },
    { name: 'JavaScript', percent: 65 },
    { name: 'Python', percent: 85 },
  ];

  const professionalSkills = [
    { name: 'Web Design', percent: 90 },
    { name: 'UI/UX', percent: 80 },
    { name: 'Teamwork', percent: 70 },
    { name: 'Problem-Solving', percent: 85 },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const renderSkillBars = (skills: { name: string; percent: number }[]) =>
    skills.map(skill => (
      <div className="progress" key={skill.name}>
        <h3>
          {skill.name} <span>{skill.percent}%</span>
        </h3>
        <div className="bar">
          <span
            style={{
              width: inView ? `${skill.percent}%` : '0%',
              transition: 'width 1s ease-in-out',
            }}
          />
        </div>
      </div>
    ));

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-row" style={{ display: 'flex', gap: '2rem' }}>
        <div className="skills-column">
          <h3 className="title">Coding Skills</h3>
          <div className="skills-box">
            <div className="skills-content">{renderSkillBars(codingSkills)}</div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Professional Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              {renderSkillBars(professionalSkills)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



