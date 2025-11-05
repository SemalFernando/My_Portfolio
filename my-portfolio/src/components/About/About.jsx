import './About.css';
import profileImage from '../../assets/profile.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>

      <div className="about-content">
        <div className="about-img">
          <img src={profileImage} alt="Semal Fernando" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-text">
          <h3>Full-Stack Developer...</h3>
          <p>As a 3rd-year Software Engineering student at Coventry University, UK, I am passionate about creating innovative and efficient software solutions. Throughout my academic journey, I have developed strong expertise in programming and software design, with hands-on experience in technologies such as Java, PHP, Python, Go (Golang), Laravel, Vue, React, React Native, and MongoDB.</p>

          <div className="btn-box btns">
            <a 
              href="https://www.linkedin.com/in/semalfernando/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;