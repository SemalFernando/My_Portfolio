import './Hero.css'
import profilePic from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Your Name</h1>
          <h2>Full-Stack Developer</h2>
          <p>
            Full-stack software engineer skilled in developing end-to-end solutions 
            across web, mobile, and desktop platforms. Passionate about building 
            impactful systems that blend clean design, efficient architecture, and 
            seamless user experiences.
          </p>
          <button className="cta-button">View My Work</button>
        </div>
        
        <div className="visual-content">
          <div className="color-shape">
            <div className="profile-frame">
              <img src={profilePic} alt="Your Name" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero