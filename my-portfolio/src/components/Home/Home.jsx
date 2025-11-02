import './Home.css';
import profileImage from '../../assets/profile.jpg'; // Import the image

const Home = () => {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <div className="text-content">
          <h1>Hi I'm <span>Semal F'do,</span><span className="animate" style={{"--i":2}}></span></h1>
          <div className="text-animate">
            <h3>Full-Stack Developer</h3>
            <span className="animate" style={{"--i":3}}></span>
          </div>
          <p>Full-stack software engineer skilled in developing end-to-end solutions across web, mobile, and desktop platforms. Passionate about building impactful systems that blend clean design, efficient architecture, and seamless user experiences.
            <span className="animate" style={{"--i":4}}></span>
          </p>
          
          <div className="btn-box">
            <a href="#" className="btn">Hire Me <i className='bx bx-right-arrow-alt'></i></a>
            <a href="#" className="btn">Let's Talk <i className='bx bxs-calendar-check'></i></a>
            <span className="animate" style={{"--i":5}}></span>
          </div>
        </div>

        <div className="visual-content">
          <div className="color-shape">
            <div className="profile-frame">
              <img src={profileImage} alt="Semal Fernando" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-sci">
        <a href="#"><i className='bx bxl-instagram-alt'></i></a>
        <a href="#"><i className='bx bxl-linkedin'></i></a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
        <a href="#"><i className='bx bxl-facebook'></i></a>
        <span className="animate" style={{"--i":6}}></span>
      </div>
    </section>
  );
};

export default Home;