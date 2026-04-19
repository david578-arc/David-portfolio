import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">DS<span>.</span></span>
          <p className="footer__tagline">Aspiring ML Engineer · Coimbatore, Tamil Nadu</p>
        </div>
        <div className="footer__links">
          {['Skills', 'Projects', 'Experience', 'Education', 'Contact'].map(l => (
            <button
              key={l}
              onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
            >
              {l}
            </button>
          ))}
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} David Siyam E · Built with React · Hosted on Vercel
        </p>
      </div>
    </footer>
  );
}
