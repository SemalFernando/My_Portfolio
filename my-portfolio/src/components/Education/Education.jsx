import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">My <span>Journey</span><span className="animate scroll" style={{"--i":1}}></span></h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">Education<span className="animate scroll" style={{"--i":2}}></span></h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2017-2018</div>
                <h3>Master Degree - University</h3>
                <p>Advanced studies in computer science with focus on full-stack development and software architecture.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2018-2019</div>
                <h3>Bachelor Degree - University</h3>
                <p>Comprehensive computer science program covering algorithms, data structures, and web technologies.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2019-2020</div>
                <h3>Diploma in Web Development</h3>
                <p>Specialized training in modern web development frameworks and best practices.</p>
              </div>
            </div>

            <span className="animate scroll" style={{"--i":3}}></span>
          </div>
        </div>

        <div className="education-column">
          <h3 className="title">Experience<span className="animate scroll" style={{"--i":5}}></span></h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2020-2021</div>
                <h3>Frontend Developer - Tech Company</h3>
                <p>Developed responsive web applications using React, JavaScript, and modern CSS frameworks.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2021-2022</div>
                <h3>Full-Stack Developer - Startup</h3>
                <p>Built end-to-end web solutions with React frontend and Node.js backend with MongoDB.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2022-Present</div>
                <h3>Senior Full-Stack Developer</h3>
                <p>Leading development of scalable applications across web and mobile platforms.</p>
              </div>
            </div>

            <span className="animate scroll" style={{"--i":6}}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;