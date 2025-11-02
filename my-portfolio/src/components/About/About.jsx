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
          <p>Full-stack software engineer skilled in developing end-to-end solutions across web, mobile, and desktop platforms. Passionate about building impactful systems that blend clean design, efficient architecture, and seamless user experiences.</p>

          <div className="btn-box btns">
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;