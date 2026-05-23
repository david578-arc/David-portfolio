import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'Compliance Guardian',
    subtitle: 'Enterprise AI Framework',
    desc: 'A multi-agent LLM framework that generates automated remediation plans and predicts compliance risks up to 6 months in advance, enabling proactive enterprise governance.',
    tags: ['LLMs', 'Multi-Agent', 'NLP', 'Python'],
    color: '#ffd700',
    icon: '🛡',
    github: 'https://github.com/david578-arc/Compilance-system',
  },
  {
    num: '02',
    title: 'LLM Conversational AI',
    subtitle: 'Customer Support System',
    desc: 'Built a transformer-based conversational AI for real-time customer support, integrated with a structured knowledge base to deliver accurate, context-aware responses.',
    tags: ['Transformers', 'NLP', 'Knowledge Base', 'Python'],
    color: '#00d9ff',
    icon: '💬',
    github: 'https://github.com/david578-arc/llm-customer-support',
  },
  {
    num: '03',
    title: 'Shelf Stock Detection',
    subtitle: 'Computer Vision System',
    desc: 'Deep learning system to detect product availability on retail shelves using object detection and image preprocessing, improving inventory monitoring precision.',
    tags: ['Computer Vision', 'Deep Learning', 'TensorFlow', 'OpenCV'],
    color: '#ff6b35',
    icon: '📦',
    github: 'https://github.com/david578-arc/Real-time-stock-detection',
  },
  {
    num: '04',
    title: 'FIFA Player Manager',
    subtitle: 'Full-Stack Application',
    desc: 'Scalable full-stack app for managing player profiles, match statistics, and performance analytics, built with a modern React frontend and Spring Boot backend.',
    tags: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    color: '#00ff88',
    icon: '⚽',
    github: 'https://github.com/david578-arc/David',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="projects__list">
          {projects.map((p, i) => (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-item ${hovered === i ? 'project-item--hovered' : ''}`}
              key={p.num}
              style={{ '--p-color': p.color }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="project-item__num">{p.num}</div>
              <div className="project-item__icon">{p.icon}</div>
              <div className="project-item__body">
                <div className="project-item__titles">
                  <h3 className="project-item__title">{p.title}</h3>
                  <span className="project-item__subtitle">{p.subtitle}</span>
                </div>
                <p className="project-item__desc">{p.desc}</p>
                <div className="project-item__tags">
                  {p.tags.map(t => (
                    <span key={t} className="project-item__tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-item__arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
