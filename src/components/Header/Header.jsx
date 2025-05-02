import React from 'react';
import { Link } from 'react-scroll';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">Your Name</div>
      <nav className="nav">
        <ul>
          <li><Link to="home" smooth={true} spy={true}  duration={500} activeClass="active">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;