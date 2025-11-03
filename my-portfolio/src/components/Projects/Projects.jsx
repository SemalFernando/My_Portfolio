import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "/project1.jpg",
      problem: "Businesses needed a scalable online store solution",
      solution: "Built full-stack e-commerce with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      id: 2,
      title: "Task Management App",
      image: "/project2.jpg",
      problem: "Teams struggled with project coordination and task tracking",
      solution: "Created collaborative task manager with real-time updates",
      technologies: ["React", "Firebase", "Material-UI", "WebSockets"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: "/project3.jpg",
      problem: "Users needed quick access to weather data with good UX",
      solution: "Developed responsive weather app with multiple API integrations",
      technologies: ["JavaScript", "API Integration", "CSS3", "Chart.js"]
    },
    {
      id: 4,
      title: "Social Media Analytics",
      image: "/project4.jpg",
      problem: "Businesses lacked insights into social media performance",
      solution: "Built analytics dashboard with data visualization and reports",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"]
    },
    {
      id: 5,
      title: "Mobile Fitness App",
      image: "/project5.jpg",
      problem: "Fitness enthusiasts needed personalized workout tracking",
      solution: "Created cross-platform fitness app with progress tracking",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"]
    },
    {
      id: 6,
      title: "Portfolio Website",
      image: "/project6.jpg",
      problem: "Professionals needed modern, responsive portfolio sites",
      solution: "Designed and developed custom portfolio with modern UI/UX",
      technologies: ["React", "CSS3", "Framer Motion", "Responsive Design"]
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">My <span>Projects</span></h2>

      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-details">
                  <div className="detail-section">
                    <h4>Problem</h4>
                    <p>{project.problem}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Solution</h4>
                    <p>{project.solution}</p>
                  </div>
                </div>
                
                <div className="project-actions">
                  <button className="project-btn btn-primary">Live Demo</button>
                  <button className="project-btn btn-secondary">Source Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;