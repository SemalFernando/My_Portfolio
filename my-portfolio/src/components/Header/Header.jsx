import './Header.css';
import { useState, useEffect } from 'react';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [headerBackground, setHeaderBackground] = useState('var(--bg-color)');
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav(`#${sectionId}`);
          
          // Check if section has second-bg-color
          if (section.classList.contains('about') || 
              section.classList.contains('skills') || 
              section.classList.contains('footer')) {
            setHeaderBackground('var(--second-bg-color)');
          } else {
            setHeaderBackground('var(--bg-color)');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    setMenuActive(false);
  };

  return (
    <header className="header" style={{ background: headerBackground }}>
      <a href="#home" className="logo" onClick={() => handleNavClick('#home')}>
        W.S.A.T. SEMAL FERNANDO
        <span className="animate" style={{"--i":1}}></span>
      </a>

      <div className={`bx bx-menu ${menuActive ? 'bx-x' : ''}`} id="menu-icon" onClick={() => setMenuActive(!menuActive)}>
        <span className="animate" style={{"--i":2}}></span>
      </div>

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a 
          href="#home" 
          className={activeNav === '#home' ? 'active' : ''}
          onClick={() => handleNavClick('#home')}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={activeNav === '#about' ? 'active' : ''}
          onClick={() => handleNavClick('#about')}
        >
          About
        </a>
        <a 
          href="#education" 
          className={activeNav === '#education' ? 'active' : ''}
          onClick={() => handleNavClick('#education')}
        >
          Education
        </a>
        <a 
          href="#skills" 
          className={activeNav === '#skills' ? 'active' : ''}
          onClick={() => handleNavClick('#skills')}
        >
          Skills
        </a>
        <a 
          href="#contact" 
          className={activeNav === '#contact' ? 'active' : ''}
          onClick={() => handleNavClick('#contact')}
        >
          Contact
        </a>

        <span className="animate" style={{"--i":2}}></span>
      </nav>
    </header>
  );
};

export default Header;