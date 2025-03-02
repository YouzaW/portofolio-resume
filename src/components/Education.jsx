import React from 'react';

export default function Education({ education }) {
  return (
    <section className="section">
      <h2>Education</h2>
      <div className="education-item">
        <h3>{education.institution}</h3>
        <p className="period">{education.period} | {education.location}</p>
        <p>{education.degree}</p>
        <p><strong>{education.cgpa}</strong></p>
      </div>
    </section>
  );
}