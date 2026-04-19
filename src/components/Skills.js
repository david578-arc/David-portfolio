import React from 'react';
import './Skills.css';

const categories = [
  {
    label: 'Programming',
    icon: '{ }',
    color: '#7c6af7',
    skills: ['Python', 'Java', 'C++'],
  },
  {
    label: 'ML & AI',
    icon: '🧠',
    color: '#3de8c8',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Transformers', 'LLMs'],
  },
  {
    label: 'Frameworks',
    icon: '⚡',
    color: '#f76a6a',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'React.jsx'],
  },
  {
    label: 'Backend',
    icon: '🔧',
    color: '#f7c26a',
    skills: ['Spring Boot', 'REST APIs'],
  },
  {
    label: 'Databases',
    icon: '🗄',
    color: '#6af7a8',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    label: 'Cloud & DevOps',
    icon: '☁',
    color: '#6aadf7',
    skills: ['AWS', 'Azure', 'OCI', 'Docker', 'Git', 'CI/CD'],
  },
  {
    label: 'DSA',
    icon: '⟳',
    color: '#d06af7',
    skills: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Dynamic Programming'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="skills__grid">
          {categories.map((cat, i) => (
            <div
              className="skill-card"
              key={cat.label}
              style={{ '--card-color': cat.color, animationDelay: `${i * 0.07}s` }}
            >
              <div className="skill-card__header">
                <span className="skill-card__icon">{cat.icon}</span>
                <span className="skill-card__label">{cat.label}</span>
              </div>
              <div className="skill-card__tags">
                {cat.skills.map(s => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
