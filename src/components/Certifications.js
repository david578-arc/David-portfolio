import React from 'react';
import './Certifications.css';

const certs = [
  { name: 'Cisco Python Essentials 1', org: 'Cisco', icon: '🐍', color: '#7c6af7' },
  { name: 'Oracle Cloud Infrastructure Foundations Associate', org: 'Oracle', icon: '☁️', color: '#f76a6a' },
  { name: 'AWS Cloud Quest', org: 'Amazon Web Services', icon: '🌩', color: '#f7c26a' },
  { name: 'Microsoft Azure Fundamentals', org: 'Microsoft', icon: '🔷', color: '#6aadf7' },
  { name: 'Introduction to Cybersecurity', org: 'Cisco', icon: '🛡', color: '#3de8c8' },
  { name: 'Introduction to Machine Learning', org: 'NPTEL', icon: '🤖', color: '#d06af7' },
  { name: 'Python for Data Science', org: 'NPTEL', icon: '📊', color: '#6af7a8' },
  { name: 'Deep Learning (ELITE)', org: 'NPTEL', icon: '🧠', color: '#f76a6a' },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certifications <span>&amp; Courses</span></h2>
        <div className="certs__grid">
          {certs.map((c, i) => (
            <div
              className="cert__card"
              key={i}
              style={{ '--c-color': c.color, animationDelay: `${i * 0.06}s` }}
            >
              <div className="cert__icon">{c.icon}</div>
              <div className="cert__body">
                <p className="cert__name">{c.name}</p>
                <span className="cert__org">{c.org}</span>
              </div>
              <div className="cert__badge">✓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
