import React from 'react';

export default function Header({ data }) {
  return (
    <header className="header">
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      <div className="contact-info">
        <p>📧 {data.contact.email}</p>
        <p>📱 {data.contact.phone}</p>
        <p>📍 {data.contact.location}</p>
        <p>👨💻 GitHub: {data.contact.github}</p>
      </div>
    </header>
  );
}