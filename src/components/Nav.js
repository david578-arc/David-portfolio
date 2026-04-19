import React, { useState, useEffect } from 'react';
import './Nav.css';

const links = ['Skills', 'Projects', 'Experience', 'Education', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <span className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          DS<span>.</span>
        </span>
        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <button onClick={() => handleNav(l)}>{l}</button>
            </li>
          ))}
          <li>
            <a className="nav__cta" href="mailto:davidsiyam87@gmail.com">Hire Me</a>
          </li>
        </ul>
        <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
