import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span><span className="animate scroll" style={{"--i":1}}></span></h2>

      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Coding Skills<span className="animate scroll" style={{"--i":2}}></span></h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span style={{width: '90%'}}></span></div>
              </div>

              <div className="progress">
                <h3>CSS <span>85%</span></h3>
                <div className="bar"><span style={{width: '85%'}}></span></div>
              </div>

              <div className="progress">
                <h3>JavaScript <span>80%</span></h3>
                <div className="bar"><span style={{width: '80%'}}></span></div>
              </div>

              <div className="progress">
                <h3>React <span>85%</span></h3>
                <div className="bar"><span style={{width: '85%'}}></span></div>
              </div>

              <div className="progress">
                <h3>Node.js <span>75%</span></h3>
                <div className="bar"><span style={{width: '75%'}}></span></div>
              </div>
            </div>

            <span className="animate scroll" style={{"--i":3}}></span>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Professional Skills<span className="animate scroll" style={{"--i":5}}></span></h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>Web Design <span>87%</span></h3>
                <div className="bar"><span style={{width: '87%'}}></span></div>
              </div>

              <div className="progress">
                <h3>Web Development <span>90%</span></h3>
                <div className="bar"><span style={{width: '90%'}}></span></div>
              </div>

              <div className="progress">
                <h3>Mobile Development <span>70%</span></h3>
                <div className="bar"><span style={{width: '70%'}}></span></div>
              </div>

              <div className="progress">
                <h3>UI/UX Design <span>75%</span></h3>
                <div className="bar"><span style={{width: '75%'}}></span></div>
              </div>

              <div className="progress">
                <h3>Database Design <span>80%</span></h3>
                <div className="bar"><span style={{width: '80%'}}></span></div>
              </div>
            </div>

            <span className="animate scroll" style={{"--i":6}}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;