'use client';
import { useState } from 'react';

export default function ESP() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem Analysis' },
    { id: 'design', label: 'Design Solution' },
    { id: 'specifications', label: 'Specifications' }
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
            Camera Strap Redesign
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '2rem',
            color: 'rgba(237, 237, 237, 0.7)',
            marginBottom: '3rem',
            maxWidth: '80rem'
          }}>
            A comprehensive Conceptual Design Specification addressing ergonomic and functional challenges in traditional camera strap design
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', color: 'rgba(237, 237, 237, 0.5)' }}>Type</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '600' }}>Product Design</div>
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
                <div style={{ fontSize: '1.3rem', color: 'rgba(237, 237, 237, 0.5)' }}>Document</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '600' }}>Full CDS</div>
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
                <div style={{ fontSize: '1.3rem', color: 'rgba(237, 237, 237, 0.5)' }}>Focus</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '600' }}>Ergonomics, Comfort</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="/documents/ESP2_CDS.pdf"
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
            View Design Specification (PDF)
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
                  This Conceptual Design Specification (CDS) presents a comprehensive redesign of the traditional camera strap, addressing critical ergonomic challenges faced by photographers during extended shooting sessions. The project focuses on reducing neck and shoulder strain while improving overall comfort and functionality.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Through user research, ergonomic analysis, and iterative design processes, this specification outlines an innovative solution that distributes weight more effectively, reduces pressure points, and enhances the overall photography experience for both amateur and professional photographers.
                </p>
                <div style={{
                  background: 'rgba(0, 171, 240, 0.05)',
                  border: '0.2rem solid rgba(0, 171, 240, 0.3)',
                  borderRadius: '0.8rem',
                  padding: '2rem',
                  marginTop: '3rem'
                }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--main-color)' }}>
                    Design Goal
                  </h3>
                  <p style={{ fontSize: '1.8rem', fontStyle: 'italic' }}>
                    "To create an ergonomic camera strap that significantly reduces physical strain during extended use while maintaining quick-access functionality and durability."
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'problem' && (
              <div>
                <h2 style={{ fontSize: '3.2rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-color)' }}>
                  Problem Analysis
                </h2>
                <p style={{ marginBottom: '2rem' }}>
                  Traditional camera straps present several significant challenges that impact user comfort and photography workflow. Through user surveys and ergonomic analysis, the following key issues were identified:
                </p>
                <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
                  {[
                    { 
                      title: 'Neck & Shoulder Strain', 
                      desc: 'Concentrated pressure on a small area leads to discomfort and fatigue during extended shooting sessions, particularly with heavier DSLR and mirrorless camera setups.',
                      icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    },
                    { 
                      title: 'Poor Weight Distribution', 
                      desc: 'Standard straps fail to distribute camera weight evenly across the body, resulting in muscle tension and potential long-term musculoskeletal issues.',
                      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                    },
                    { 
                      title: 'Limited Adjustability', 
                      desc: 'Insufficient customization options make it difficult for users of different body types to achieve optimal comfort and camera positioning.',
                      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                    },
                    { 
                      title: 'Material Discomfort', 
                      desc: 'Thin, rigid materials can dig into the skin, while slippery materials cause constant readjustment, interrupting the creative workflow.',
                      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(17, 46, 66, 0.6)',
                        border: '0.2rem solid rgba(0, 171, 240, 0.2)',
                        borderRadius: '0.8rem',
                        padding: '2.5rem',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        gap: '2rem'
                      }}
                    >
                      <div style={{
                        width: '4rem',
                        height: '4rem',
                        minWidth: '4rem',
                        borderRadius: '0.8rem',
                        background: 'rgba(0, 171, 240, 0.1)',
                        border: '0.2rem solid rgba(0, 171, 240, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="20" height="20" fill="none" stroke="var(--main-color)" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--main-color)' }}>
                          {item.title}
                        </h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'design' && (
              <div>
                <h2 style={{ fontSize: '3.2rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-color)' }}>
                  Design Solution
                </h2>
                <p style={{ marginBottom: '3rem' }}>
                  The proposed camera strap design incorporates innovative features that directly address the identified problems, resulting in a superior user experience for photographers of all levels.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  {[
                    { 
                      num: '01', 
                      title: 'Ergonomic Padding System', 
                      text: 'Wide, contoured padding with memory foam distributes weight across a larger surface area, significantly reducing pressure points and improving all-day comfort.'
                    },
                    { 
                      num: '02', 
                      title: 'Advanced Weight Distribution', 
                      text: 'Cross-body design with adjustable anchor points allows for optimal weight balancing and reduces strain on any single area of the body.'
                    },
                    { 
                      num: '03', 
                      title: 'Multi-Point Adjustment System', 
                      text: 'Quick-release buckles and multiple adjustment points enable precise customization for different body types and shooting styles.'
                    },
                    { 
                      num: '04', 
                      title: 'Premium Material Selection', 
                      text: 'Breathable, moisture-wicking outer layer with non-slip inner surface ensures comfort during extended use in various weather conditions.'
                    },
                    { 
                      num: '05', 
                      title: 'Modular Accessory Integration', 
                      text: 'Built-in attachment points for lens caps, memory cards, and other small accessories keep essential items within easy reach.'
                    }
                  ].map((feature) => (
                    <div key={feature.num} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                      <div style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        color: 'var(--main-color)',
                        fontFamily: 'monospace',
                        minWidth: '6rem'
                      }}>
                        {feature.num}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '2.2rem', fontWeight: '600', marginBottom: '0.8rem', color: 'var(--text-color)' }}>
                          {feature.title}
                        </h3>
                        <p style={{ color: 'rgba(237, 237, 237, 0.7)' }}>
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'specifications' && (
              <div>
                <h2 style={{ fontSize: '3.2rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-color)' }}>
                  Technical Specifications
                </h2>
                <p style={{ marginBottom: '3rem' }}>
                  The Conceptual Design Specification outlines detailed requirements for materials, dimensions, and performance criteria to ensure the final product meets the highest standards of quality and functionality.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                  {[
                    { label: 'Strap Width', value: '40-50mm padded section' },
                    { label: 'Length Range', value: '90-150cm adjustable' },
                    { label: 'Weight Capacity', value: 'Up to 5kg camera systems' },
                    { label: 'Padding Thickness', value: '8-12mm memory foam' },
                    { label: 'Material', value: 'Nylon webbing with neoprene padding' },
                    { label: 'Weather Resistance', value: 'Water-resistant coating' }
                  ].map((spec, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(17, 46, 66, 0.6)',
                        border: '0.2rem solid rgba(0, 171, 240, 0.2)',
                        borderRadius: '0.8rem',
                        padding: '2rem'
                      }}
                    >
                      <div style={{ fontSize: '1.4rem', color: 'rgba(237, 237, 237, 0.5)', marginBottom: '0.5rem' }}>
                        {spec.label}
                      </div>
                      <div style={{ fontSize: '1.8rem', fontWeight: '600', color: 'var(--main-color)' }}>
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: 'rgba(0, 171, 240, 0.05)',
                  border: '0.2rem solid rgba(0, 171, 240, 0.3)',
                  borderRadius: '0.8rem',
                  padding: '2rem',
                  marginTop: '3rem'
                }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--main-color)' }}>
                    Key Design Considerations
                  </h3>
                  <ul style={{ marginLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <li>Durability tested for 50,000+ adjustment cycles</li>
                    <li>Quick-release mechanism operable with one hand</li>
                    <li>Compatible with all standard camera mounting systems</li>
                    <li>Maintenance-free design with machine-washable components</li>
                    <li>Sustainable materials with minimal environmental impact</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}