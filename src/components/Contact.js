import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('davidsiyam87@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { label: 'Email', value: 'davidsiyam87@gmail.com', href: 'mailto:davidsiyam87@gmail.com', icon: '✉️' },
    { label: 'Phone', value: '+91 8610695242', href: 'tel:+918610695242', icon: '📞' },
    { label: 'GitHub', value: 'github.com/davidsiyam', href: 'https://github.com', icon: '🐙' },
    { label: 'Portfolio', value: 'View Portfolio', href: '#', icon: '🌐' },
    { label: 'Location', value: 'Coimbatore, Tamil Nadu', href: null, icon: '📍' },
  ];

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Let's Connect</p>
        <h2 className="section-title">Get In <span>Touch</span></h2>

        <div className="contact__layout">
          <div className="contact__left">
            <p className="contact__intro">
              I'm actively looking for internship and full-time opportunities in AI/ML engineering.
              Whether you have a project in mind or just want to say hi — my inbox is always open.
            </p>
            <div className="contact__quote">
              <span>"An innovator dedicated to architecting the next generation<br />of intelligent systems."</span>
            </div>
            <div className="contact__langs">
              <span className="contact__lang-label">Languages:</span>
              <span className="contact__lang">Tamil (Native)</span>
              <span className="contact__lang">English (Proficient)</span>
              <span className="contact__lang">Hindi (Elementary)</span>
            </div>
          </div>

          <div className="contact__right">
            {links.map((l) => (
              <div className="contact__item" key={l.label}>
                <span className="contact__item-icon">{l.icon}</span>
                <div className="contact__item-body">
                  <span className="contact__item-label">{l.label}</span>
                  {l.href ? (
                    <a className="contact__item-value" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {l.value}
                    </a>
                  ) : (
                    <span className="contact__item-value">{l.value}</span>
                  )}
                </div>
                {l.label === 'Email' && (
                  <button className="contact__copy" onClick={copyEmail}>
                    {copied ? '✓' : '⎘'}
                  </button>
                )}
              </div>
            ))}

            <a className="contact__cta" href="mailto:davidsiyam87@gmail.com">
              Send me a message <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
