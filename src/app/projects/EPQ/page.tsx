'use client';
import { useState } from 'react';

export default function EPQ() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'research', label: 'Research' },
    { id: 'findings', label: 'Key Findings' },
    { id: 'conclusion', label: 'Conclusion' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-color)',
      color: 'var(--text-color)',
      paddingTop: '12rem'
    }}>
      {/* Hero Section */}
      <div style={{
        padding: '0 9%',
        marginBottom: '6rem'
      }}>
        <div style={{
          maxWidth: '120rem',
          margin: '0 auto'
        }}>
          {/* Back button */}
          <a
            href="/#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              fontSize: '1.6rem',
              color: 'var(--main-color)',
              marginBottom: '3rem',
              transition: 'transform 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-0.5rem)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </a>

          {/* Title */}
          <h1 style={{
            fontSize: '5.6rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, var(--text-color) 0%, var(--main-color) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Will AI End Humanity?
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '2rem',
            color: 'rgba(237, 237, 237, 0.7)',
            marginBottom: '3rem',
            maxWidth: '80rem'
          }}>
            An Extended Project Qualification dissertation exploring the existential risks and ethical implications of artificial intelligence
          </p>

          {/* Meta info */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '0.8rem',
                background: 'rgba(0, 171, 240, 0.1)',
                border: '0.2rem solid rgba(0, 171, 240, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" fill="none" stroke="var(--main-color)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', color: 'rgba(237, 237, 237, 0.5)' }}>Type</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '600' }}>Research Dissertation</div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '0.8rem',
                background: 'rgba(0, 171, 240, 0.1)',
                border: '0.2rem solid rgba(0, 171, 240, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" fill="none" stroke="var(--main-color)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', color: 'rgba(237, 237, 237, 0.5)' }}>Pages</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '600' }}>25+ Pages</div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '0.8rem',
                background: 'rgba(0, 171, 240, 0.1)',
                border: '0.2rem solid rgba(0, 171, 240, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" fill="none" stroke="var(--main-color)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', color: 'rgba(237, 237, 237, 0.5)' }}>Topics</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '600' }}>AI Ethics, Safety</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="/documents/AI_EPQ.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem 3rem',
              fontSize: '1.8rem',
              fontWeight: '600',
              background: 'var(--main-color)',
              color: 'var(--bg-color)',
              borderRadius: '0.8rem',
              border: '0.2rem solid var(--main-color)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--main-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--main-color)';
              e.currentTarget.style.color = 'var(--bg-color)';
            }}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
            </svg>
            View Full Dissertation (PDF)
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        background: 'var(--second-bg-color)',
        padding: '8rem 9%'
      }}>
        <div style={{
          maxWidth: '120rem',
          margin: '0 auto'
        }}>
          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            marginBottom: '4rem',
            borderBottom: '0.2rem solid rgba(0, 171, 240, 0.2)',
            flexWrap: 'wrap'
          }}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{
                  padding: '1.5rem 2rem',
                  fontSize: '1.6rem',
                  fontWeight: '600',
                  background: 'transparent',
                  color: activeSection === section.id ? 'var(--main-color)' : 'rgba(237, 237, 237, 0.6)',
                  border: 'none',
                  borderBottom: activeSection === section.id ? '0.3rem solid var(--main-color)' : '0.3rem solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '-0.2rem'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.color = 'var(--text-color)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.color = 'rgba(237, 237, 237, 0.6)';
                  }
                }}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{
            fontSize: '1.6rem',
            lineHeight: '1.8',
            color: 'rgba(237, 237, 237, 0.8)'
          }}>
            {activeSection === 'overview' && (
              <div>
                <h2 style={{ fontSize: '3.2rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-color)' }}>
                  Project Overview
                </h2>
                <p style={{ marginBottom: '2rem' }}>
                  This Extended Project Qualification (EPQ) dissertation examines one of the most pressing questions of our time: Could artificial intelligence pose an existential threat to humanity? Through comprehensive research and analysis, this project explores the potential risks, ethical considerations, and safety measures surrounding advanced AI systems.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  The research draws from leading AI safety researchers, philosophers, and technologists to present a balanced perspective on AI risks, from near-term concerns like algorithmic bias and job displacement to long-term existential risks associated with artificial general intelligence (AGI) and superintelligence.
                </p>
                <div style={{
                  background: 'rgba(0, 171, 240, 0.05)',
                  border: '0.2rem solid rgba(0, 171, 240, 0.3)',
                  borderRadius: '0.8rem',
                  padding: '2rem',
                  marginTop: '3rem'
                }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--main-color)' }}>
                    Research Question
                  </h3>
                  <p style={{ fontSize: '1.8rem', fontStyle: 'italic' }}>
                    "To what extent does artificial intelligence pose an existential risk to humanity, and what measures can be implemented to ensure safe AI development?"
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'research' && (
              <div>
                <h2 style={{ fontSize: '3.2rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-color)' }}>
                  Research Methodology
                </h2>
                <p style={{ marginBottom: '2rem' }}>
                  This dissertation employed a multi-faceted research approach, combining literature review, case study analysis, and expert opinion synthesis to provide a comprehensive examination of AI risks.
                </p>
                <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
                  {[
                    { title: 'Literature Review', desc: 'Analysis of seminal papers from AI safety researchers including Stuart Russell, Nick Bostrom, and Eliezer Yudkowsky' },
                    { title: 'Case Studies', desc: 'Examination of historical AI incidents and near-misses to identify patterns and risk factors' },
                    { title: 'Technical Analysis', desc: 'Investigation of AI alignment problems, control mechanisms, and safety frameworks' },
                    { title: 'Ethical Framework', desc: 'Evaluation of ethical considerations in AI development and deployment' }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(17, 46, 66, 0.6)',
                        border: '0.2rem solid rgba(0, 171, 240, 0.2)',
                        borderRadius: '0.8rem',
                        padding: '2rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--main-color)' }}>
                        {item.title}
                      </h3>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'findings' && (
              <div>
                <h2 style={{ fontSize: '3.2rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-color)' }}>
                  Key Findings
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  {[
                    { num: '01', title: 'Alignment Problem', text: 'The fundamental challenge of ensuring AI systems pursue goals aligned with human values remains unsolved' },
                    { num: '02', title: 'Control Mechanisms', text: 'Current AI control and safety measures may prove insufficient for advanced AI systems' },
                    { num: '03', title: 'Timeline Uncertainty', text: 'Significant disagreement exists among experts regarding when AGI might be achieved' },
                    { num: '04', title: 'Safety Research Gap', text: 'AI capabilities are advancing faster than AI safety research and implementation' }
                  ].map((finding) => (
                    <div key={finding.num} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                      <div style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        color: 'var(--main-color)',
                        fontFamily: 'monospace',
                        minWidth: '6rem'
                      }}>
                        {finding.num}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '2.2rem', fontWeight: '600', marginBottom: '0.8rem', color: 'var(--text-color)' }}>
                          {finding.title}
                        </h3>
                        <p style={{ color: 'rgba(237, 237, 237, 0.7)' }}>
                          {finding.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'conclusion' && (
              <div>
                <h2 style={{ fontSize: '3.2rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-color)' }}>
                  Conclusion
                </h2>
                <p style={{ marginBottom: '2rem' }}>
                  While the question of whether AI will end humanity remains uncertain, this research demonstrates that the risks are substantial enough to warrant serious attention and proactive safety measures. The dissertation concludes that:
                </p>
                <ul style={{ marginLeft: '2rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li>AI poses both near-term and long-term risks that require different mitigation strategies</li>
                  <li>International cooperation and governance frameworks are essential for safe AI development</li>
                  <li>Significantly more resources should be allocated to AI safety research</li>
                  <li>A precautionary approach to advanced AI development is warranted</li>
                </ul>
                <div style={{
                  background: 'rgba(0, 171, 240, 0.05)',
                  border: '0.2rem solid rgba(0, 171, 240, 0.3)',
                  borderRadius: '0.8rem',
                  padding: '2rem',
                  marginTop: '3rem'
                }}>
                  <p style={{ fontSize: '1.8rem', fontStyle: 'italic', color: 'var(--text-color)' }}>
                    "The development of artificial intelligence represents one of the most significant technological transitions in human history. Our response to its challenges will likely determine the trajectory of our civilization."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function EPQ() {
//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-4">AI EPQ</h1>
//       <p>Your dissertation content or link to PDF goes here.</p>
//       <a
//         href="/documents/AI_EPQ.pdf"
//         target="_blank"
//         className="text-blue-600 underline"
//       >
//         View PDF
//       </a>
//     </div>
//   );
// }
