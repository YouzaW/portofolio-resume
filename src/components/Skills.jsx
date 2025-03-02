import React from 'react';

export default function Skills({ skills }) {
  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            {skills.programming.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Technologies & Frameworks</h3>
          <ul>
            {skills.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Platforms</h3>
          <ul>
            {skills.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}