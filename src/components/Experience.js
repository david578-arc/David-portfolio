import React from 'react';
import './Experience.css';

const exp = [
  {
    role: 'AI/ML Engineer Intern',
    company: 'Nandha Infotech',
    period: 'Internship',
    color: '#7c6af7',
    desc: 'Worked on end-to-end machine learning workflows including data preprocessing, model training, evaluation, and integration of AI components into production-oriented systems.',
    highlights: ['End-to-end ML workflows', 'Model training & evaluation', 'Production AI integration', 'Data preprocessing pipelines'],
  },
  {
    role: 'Machine Learning Engineer Intern',
    company: 'Internpe',
    period: 'Internship',
    color: '#3de8c8',
    desc: 'Implemented supervised learning models, feature engineering pipelines, and evaluation metrics for real-world datasets using Python and TensorFlow.',
    highlights: ['Supervised learning models', 'Feature engineering pipelines', 'Python & TensorFlow', 'Real-world dataset analysis'],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Where I've Worked</p>
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="exp__timeline">
          {exp.map((e, i) => (
            <div className="exp__item" key={i} style={{ '--e-color': e.color }}>
              <div className="exp__line-col">
                <div className="exp__dot" />
                {i < exp.length - 1 && <div className="exp__connector" />}
              </div>
              <div className="exp__card">
                <div className="exp__card-top">
                  <div>
                    <h3 className="exp__role">{e.role}</h3>
                    <span className="exp__company">{e.company}</span>
                  </div>
                  <span className="exp__period">{e.period}</span>
                </div>
                <p className="exp__desc">{e.desc}</p>
                <div className="exp__highlights">
                  {e.highlights.map(h => (
                    <span key={h} className="exp__highlight">
                      <span className="exp__check">✓</span> {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
