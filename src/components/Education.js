import React from 'react';
import './Education.css';

const edu = [
  {
    degree: 'BE – Computer Science & Engineering',
    field: 'Artificial Intelligence & Machine Learning',
    school: 'Sri Krishna College of Technology, Coimbatore',
    detail: 'CGPA: 7.52 (5th Sem) · Expected 2027',
    icon: '🎓',
    color: '#7c6af7',
  },
  {
    degree: 'HSC – Higher Secondary',
    field: 'Science',
    school: 'CRR Matriculation Higher Secondary School',
    detail: 'Score: 92%',
    icon: '📚',
    color: '#3de8c8',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">My <span>Education</span></h2>
        <div className="edu__grid">
          {edu.map((e, i) => (
            <div className="edu__card" key={i} style={{ '--edu-color': e.color }}>
              <div className="edu__icon-wrap">{e.icon}</div>
              <div className="edu__body">
                <h3 className="edu__degree">{e.degree}</h3>
                <span className="edu__field">{e.field}</span>
                <p className="edu__school">{e.school}</p>
                <span className="edu__detail">{e.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
