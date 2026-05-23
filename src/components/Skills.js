import React from 'react';
import './Skills.css';

const categories = [
  {
    label: 'Programming',
    icon: '</>',
    color: '#3b82f6',
    skills: ['Python', 'Java', 'C++'],
  },
  {
    label: 'ML & AI',
    icon: '🤖',
    color: '#60a5fa',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Transformers', 'LLMs', 'LangChain', 'LangGraph', 'Statistics', 'Mathematics'],
  },
  {
    label: 'Frameworks',
    icon: '⚙️',
    color: '#2563eb',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'React.jsx'],
  },
  {
    label: 'Backend',
    icon: '🔥',
    color: '#1d4ed8',
    skills: ['Spring Boot', 'REST APIs', 'Node.js', 'Express.js'],
  },
  {
    label: 'Databases',
    icon: '💾',
    color: '#1e40af',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Cloud & DevOps',
    icon: '☁️',
    color: '#3b82f6',
    skills: ['AWS', 'Azure', 'OCI', 'Docker', 'Git', 'CI/CD'],
  },
  {
    label: 'DSA',
    icon: '🧩',
    color: '#60a5fa',
    skills: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Dynamic Programming'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label">What I Master</p>
        <h2 className="section-title">Tech <span>Stack</span></h2>
        <div className="skills__grid">
          {categories.map((cat, i) => (
            <div
              className="skill-card"
              key={cat.label}
              style={{ '--card-color': cat.color, animationDelay: `${i * 0.1}s` }}
            >
              <div className="skill-card__glow"></div>
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
