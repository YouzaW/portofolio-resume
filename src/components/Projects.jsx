import React from 'react';

export default function Projects({ projects }) {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <p className="period">{project.period}</p>
            </div>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech?.map((tech, i) => (
                <span key={i} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}