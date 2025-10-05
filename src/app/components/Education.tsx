'use client';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  highlights?: string[];
}

const educationData: TimelineItem[] = [
  {
    year: '2024 - 2029',
    title: 'Bachelor of Applied Science in Engineering',
    organization: 'University of Toronto',
    description: 'Pursuing a comprehensive engineering degree with focus on innovative problem-solving, technical design, and applied sciences.',
    highlights: [
      'Engineering Science Program',
      'Focus on Design and Innovation',
      'Hands-on Project-Based Learning'
    ]
  },
  {
    year: '2020 - 2024',
    title: 'High School Diploma',
    organization: 'Your High School Name',
    description: 'Completed advanced courses in mathematics, sciences, and technology with distinction.',
    highlights: [
      'Extended Project Qualification (EPQ)',
      'Advanced STEM Courses',
      'Academic Excellence Awards'
    ]
  }
];

const experienceData: TimelineItem[] = [
  {
    year: '2024 - Present',
    title: 'Web Developer',
    organization: 'Freelance / Personal Projects',
    description: 'Building modern, responsive web applications using Next.js, React, and TypeScript. Focus on creating engaging user experiences with clean, maintainable code.',
    highlights: [
      'Next.js & React Development',
      'Responsive UI/UX Design',
      'Full-Stack Integration'
    ]
  },
  {
    year: '2023 - 2024',
    title: 'Engineering Student Researcher',
    organization: 'Academic Projects',
    description: 'Conducted research on AI safety and product design, resulting in comprehensive project documentation and presentations.',
    highlights: [
      'AI Ethics Research',
      'Product Design Specifications',
      'Technical Documentation'
    ]
  }
];

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Journey</span>
      </h2>

      <div className="education-row">
        {/* Education Column */}
        <div className="education-column">
          <h3 className="title">Education</h3>
          <div className="education-box">
            {educationData.map((item, index) => (
              <div className="education-content" key={index}>
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> {item.year}
                  </div>
                  <h3>{item.title}</h3>
                  <h4 style={{
                    fontSize: '1.8rem',
                    color: 'var(--main-color)',
                    fontWeight: '500',
                    marginBottom: '1rem'
                  }}>
                    {item.organization}
                  </h4>
                  <p style={{ marginBottom: '1rem' }}>
                    {item.description}
                  </p>
                  {item.highlights && (
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {item.highlights.map((highlight, idx) => (
                        <li 
                          key={idx}
                          style={{
                            fontSize: '1.4rem',
                            color: 'rgba(237, 237, 237, 0.7)',
                            paddingLeft: '1.5rem',
                            position: 'relative'
                          }}
                        >
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--main-color)',
                            fontWeight: 'bold'
                          }}>
                            •
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="education-column">
          <h3 className="title">Experience</h3>
          <div className="education-box">
            {experienceData.map((item, index) => (
              <div className="education-content" key={index}>
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> {item.year}
                  </div>
                  <h3>{item.title}</h3>
                  <h4 style={{
                    fontSize: '1.8rem',
                    color: 'var(--main-color)',
                    fontWeight: '500',
                    marginBottom: '1rem'
                  }}>
                    {item.organization}
                  </h4>
                  <p style={{ marginBottom: '1rem' }}>
                    {item.description}
                  </p>
                  {item.highlights && (
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {item.highlights.map((highlight, idx) => (
                        <li 
                          key={idx}
                          style={{
                            fontSize: '1.4rem',
                            color: 'rgba(237, 237, 237, 0.7)',
                            paddingLeft: '1.5rem',
                            position: 'relative'
                          }}
                        >
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--main-color)',
                            fontWeight: 'bold'
                          }}>
                            •
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}