import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    const particles = [];
    const N = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        a: Math.random(),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,106,247,${p.a * 0.6})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(61,232,200,${(1 - d / 120) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="container hero__content">
        <div className="hero__tag">
          <span className="hero__dot" />
          Available for opportunities
        </div>
        <h1 className="hero__name">
          David<br />
          <span>Siyam E</span>
        </h1>
        <p className="hero__role">
          <span className="hero__role-line">Aspiring ML Engineer</span>
          <span className="hero__role-sep">/</span>
          <span className="hero__role-line">AI Systems Builder</span>
        </p>
        <p className="hero__quote">
          "An innovator dedicated to architecting the next generation of intelligent systems,<br />
          blending advanced AI with secure, scalable software engineering."
        </p>
        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </button>
          <a className="hero__btn hero__btn--ghost" href="mailto:davidsiyam87@gmail.com">
            Get in Touch
          </a>
        </div>
        <div className="hero__meta">
          <span>📍 Coimbatore, Tamil Nadu</span>
          <span>🎓 SKCT · AI & ML · 2027</span>
          <span>📞 +91 8610695242</span>
        </div>
      </div>
      <div className="hero__scroll">
        <span />
      </div>
    </section>
  );
}
