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
              transition: 'all 0.5s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            {/* Subtle glow on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(0, 171, 240, 0.15), transparent 70%)',
                borderRadius: '1.5rem',
                transition: 'opacity 0.5s ease'
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
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
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
                          border: '0.1rem solid rgba(0, 171, 240, 0.3)'
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
              .project-card:hover {
                transform: translateY(-0.5rem);
                border-color: var(--main-color);
                box-shadow: 0 1rem 3rem rgba(0, 171, 240, 0.2);
              }
            `}</style>
          </Link>
        ))}
      </div>
    </section>
  );
}


// // app/components/projects.tsx
// import Link from "next/link";

// interface Project {
//   title: string;
//   description: string;
//   href: string;
//   tags?: string[];
// }

// const projects: Project[] = [
//   {
//     title: "Will AI End Humanity?",
//     description: "A dissertation exploring the potential risks of AI.",
//     href: "/projects/EPQ",
//     tags: ["Research", "AI Ethics"],
//   },
//   {
//     title: "Camera Strap Redesign",
//     description: "A Conceptual Design Specification for a camera strap.",
//     href: "/projects/ESP",
//     tags: ["Design", "Product"],
//   }
// ];

// export default function Projects() {
//   return (
//     <section
//       className="projects-section text-white py-20"
//       id="projects"
//     >
//       <div>
//         <h2 className="heading">
//           My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
//         </h2>
//         <p>
//           Explore my latest work and creative endeavors
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Link
//               key={project.title}
//               href={project.href}
//               className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-8 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2"
//             >
//               {/* Animated gradient background on hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
              
//               {/* Accent corner decoration */}
//               <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500" />

//               <div className="relative z-10 flex flex-col h-full">
//                 {/* Project number badge */}
//                 <div className="text-sm font-mono text-blue-400/60 mb-4">
//                   {String(index + 1).padStart(2, '0')}
//                 </div>

//                 <div className="flex-grow">
//                   <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-400 leading-relaxed mb-4">
//                     {project.description}
//                   </p>

//                   {/* Tags */}
//                   {project.tags && (
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* View project link with arrow animation */}
//                 <div className="flex items-center text-blue-400 font-medium mt-4">
//                   <span className="mr-2">View Project</span>
//                   <svg
//                     className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }