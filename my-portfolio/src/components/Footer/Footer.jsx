import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>W.S.A.T. Semal Fernando</h3>
            <p>Passion for technology, Commitment to excellence.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/semalfernando/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-linkedin'></i>
              </a>
              <a href="https://github.com/SemalFernando" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-github'></i>
              </a>
              <a href="https://www.instagram.com/semal_fdo/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-instagram-alt'></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <i className='bx bx-envelope'></i>
              <span>fernandosemal2124@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className='bx bx-phone'></i>
              <span>075 760 4427</span>
            </div>
            <div className="contact-item">
              <i className='bx bx-map'></i>
              <span>Panadura, Sri Lanka</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Semal Fernando. All rights reserved.</p>
          </div>
          
          <div className="footer-actions">
            <a 
              href="https://drive.google.com/file/d/1oMTrNMyHzomDQNvzvgbj3MVmRn9hbaIB/view?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-btn"
            >
              <i className='bx bxs-file-doc'></i>
              Download CV
            </a>
            
            <button className="back-to-top" onClick={scrollToTop}>
              <i className='bx bx-chevron-up'></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;