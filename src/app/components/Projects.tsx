// app/components/projects.tsx
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  href: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    title: "Will AI End Humanity?",
    description: "A dissertation exploring the potential risks of AI.",
    href: "/projects/EPQ",
    tags: ["Research", "AI Ethics"],
  },
  {
    title: "Camera Strap Redesign",
    description: "A Conceptual Design Specification for a camera strap.",
    href: "/projects/ESP",
    tags: ["Design", "Product"],
  }
];

export default function Projects() {
  return (
    <section
      className="projects-section text-white"
      id="projects"
    >
      <h2 className="heading">
        My <span>Projects</span>
      </h2>
      <p style={{ fontSize: '1.6rem', marginBottom: '5rem', color: 'var(--text-color)', textAlign: 'center' }}>
        Explore my latest work and creative endeavors
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: '120rem', margin: '0 auto' }}>
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={project.href}
            className="project-card group relative"
            style={{
              background: 'linear-gradient(135deg, rgba(17, 46, 66, 0.6), rgba(8, 27, 41, 0.8))',
              border: '0.2rem solid rgba(0, 171, 240, 0.3)',
              padding: '3rem',
              borderRadius: '1.5rem',
              overflow: 'visible',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              willChange: 'transform'
            }}
          >
            {/* Subtle glow on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(0, 171, 240, 0.15), transparent 70%)',
                borderRadius: '1.5rem',
                transition: 'opacity 0.3s ease'
              }}
            />

            <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              {/* Project number */}
              <div style={{ 
                fontSize: '1.4rem', 
                fontFamily: 'monospace',
                color: 'var(--main-color)',
                marginBottom: '2rem',
                fontWeight: '600',
                letterSpacing: '0.1rem'
              }}>
                #{String(index + 1).padStart(2, '0')}
              </div>

              <div style={{ flexGrow: 1 }}>
                {/* Title */}
                <h3 
                  className="group-hover:text-[var(--main-color)]"
                  style={{
                    fontSize: '2.8rem',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    lineHeight: '1.3',
                    color: 'var(--text-color)',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {project.title}
                </h3>
                
                {/* Description */}
                <p style={{
                  fontSize: '1.6rem',
                  color: 'rgba(237, 237, 237, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags && (
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '1rem', 
                    marginBottom: '2rem',
                    minHeight: '3.3rem'
                  }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '0.5rem 1.5rem',
                          fontSize: '1.3rem',
                          fontWeight: '500',
                          background: 'rgba(0, 171, 240, 0.1)',
                          color: 'var(--main-color)',
                          borderRadius: '0.5rem',
                          border: '0.1rem solid rgba(0, 171, 240, 0.3)',
                          whiteSpace: 'nowrap',
                          height: '3.3rem',
                          display: 'inline-flex',
                          alignItems: 'center'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* View Project CTA */}
              <div 
                className="group-hover:translate-x-2"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginTop: 'auto',
                  fontSize: '1.6rem',
                  fontWeight: '600',
                  color: 'var(--main-color)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <span>View Project</span>
                <svg
                  style={{ width: '2rem', height: '2rem' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>

            {/* Hover effect */}
            <style jsx>{`
              .project-card {
                transform: translateY(0);
              }
              .project-card:hover {
                transform: translateY(-0.5rem) !important;
                border-color: var(--main-color) !important;
                box-shadow: 0 1rem 3rem rgba(0, 171, 240, 0.2) !important;
              }
            `}</style>
          </Link>
        ))}
      </div>
    </section>
  );
}