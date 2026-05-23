import React from 'react';
import './Skills.css';

const categories = [
  {
    label: 'Programming',
    icon: '{ }',
    color: '#8a78ff',
    skills: ['Python', 'Java', 'C++'],
  },
  {
    label: 'ML & AI',
    icon: '🧠',
    color: '#00f5d4',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Transformers', 'LLMs', 'LangChain', 'LangGraph'],
  },
  {
    label: 'Frameworks',
    icon: '⚡',
    color: '#ff6b9d',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'React.jsx'],
  },
  {
    label: 'Backend',
    icon: '🔧',
    color: '#ffa726',
    skills: ['Spring Boot', 'REST APIs'],
  },
  {
    label: 'Databases',
    icon: '🗄',
    color: '#66bb6a',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Cloud & DevOps',
    icon: '☁',
    color: '#42a5f5',
    skills: ['AWS', 'Azure', 'OCI', 'Docker', 'Git', 'CI/CD'],
  },
  {
    label: 'DSA',
    icon: '⟳',
    color: '#ab47bc',
    skills: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Dynamic Programming'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Technical <span>Arsenal</span></h2>
        <div className="skills__grid">
          {categories.map((cat, i) => (
            <div
              className="skill-card"
              key={cat.label}
              style={{ '--card-color': cat.color, animationDelay: `${i * 0.08}s` }}
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
