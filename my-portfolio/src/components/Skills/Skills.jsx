import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>

      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Coding Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>Java <span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Go (Golang) <span>65%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>React <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>PHP <span>75%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Python <span>65%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Frameworks / Libraries</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>React Native (JavaScript) <span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Vue.js (JavaScript) <span>75%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Spring / Spring Boot (Java) <span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Laravel (PHP) <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>.NET Framework <span>75%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-btn-box">
        <a 
          href="https://www.linkedin.com/in/semalfernando/details/skills/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn"
        >
          View Other Skills
        </a>
      </div>
    </section>
  );
};

export default Skills;