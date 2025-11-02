import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span><span className="animate scroll" style={{"--i":1}}></span></h2>

      <div className="about-img">
        <img src="/Designer.png" alt="Semal Fernando" />
        <span className="circle-spin"></span>
        <span className="animate scroll" style={{"--i":2}}></span>
      </div>

      <div className="about-content">
        <h3>Full-Stack Developer!<span className="animate scroll" style={{"--i":3}}></span></h3>
        <p>Full-stack software engineer skilled in developing end-to-end solutions across web, mobile, and desktop platforms. Passionate about building impactful systems that blend clean design, efficient architecture, and seamless user experiences.
          <span className="animate scroll" style={{"--i":4}}></span>
        </p>

        <div className="btn-box btns">
          <a href="#" className="btn">Read More</a>
          <span className="animate scroll" style={{"--i":5}}></span>
        </div>
      </div>
    </section>
  );
};

export default About;