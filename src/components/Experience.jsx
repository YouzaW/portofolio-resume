import React from 'react';

export default function Experience({ experience }) {
  return (
    <section className="section">
      <h2>Professional Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <h3>{exp.company}</h3>
            <p className="period">{exp.period} | {exp.location}</p>
          </div>
          <h4>{exp.position}</h4>
          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}