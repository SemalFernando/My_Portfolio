import './Home.css';
import profileImage from '../../assets/profile.jpg';

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
            <a href="https://drive.google.com/file/d/1oMTrNMyHzomDQNvzvgbj3MVmRn9hbaIB/view?usp=drivesdk" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn">
              View My CV <i className='bx bxs-file-doc'></i>
            </a>
            <span className="animate" style={{"--i":5}}></span>
          </div>

          <div className="home-sci">
            <a href="https://www.instagram.com/semal_fdo/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram-alt'></i></a>
            <a href="https://www.linkedin.com/in/semalfernando/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/SemalFernando" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
            <span className="animate" style={{"--i":6}}></span>
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
    </section>
  );
};

export default Home;