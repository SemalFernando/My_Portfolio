import './Header.css';
import { useState } from 'react';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <a href="#" className="logo">SEMAL FERNANDO<span className="animate" style={{"--i":1}}></span></a>

      <div className={`bx bx-menu ${menuActive ? 'bx-x' : ''}`} id="menu-icon" onClick={() => setMenuActive(!menuActive)}>
        <span className="animate" style={{"--i":2}}></span>
      </div>

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>

        <span className="active-nav"></span>
        <span className="animate" style={{"--i":2}}></span>
      </nav>
    </header>
  );
};

export default Header;