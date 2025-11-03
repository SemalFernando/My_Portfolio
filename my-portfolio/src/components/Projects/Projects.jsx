import './Projects.css';
import projectImage from '../../assets/project1.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      problem: "Businesses needed a scalable online store solution with secure payments and inventory management",
      solution: "Built full-stack e-commerce platform with React, Node.js, MongoDB and integrated payment processing",
      githubUrl: "https://github.com/SemalFernando/ecommerce-platform"
    },
    {
      id: 2,
      title: "Task Management App",
      problem: "Teams struggled with project coordination, task delegation and progress tracking",
      solution: "Created collaborative task manager with real-time updates, team collaboration and deadline tracking",
      githubUrl: "https://github.com/SemalFernando/task-manager"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      problem: "Users needed quick access to comprehensive weather data with intuitive user experience",
      solution: "Developed responsive weather application with multiple API integrations and data visualization",
      githubUrl: "https://github.com/SemalFernando/weather-dashboard"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      problem: "Businesses lacked actionable insights into social media performance and engagement metrics",
      solution: "Built comprehensive analytics dashboard with real-time data visualization and performance reports",
      githubUrl: "https://github.com/SemalFernando/social-analytics"
    },
    {
      id: 5,
      title: "Mobile Fitness App",
      problem: "Fitness enthusiasts needed personalized workout tracking and progress monitoring",
      solution: "Created cross-platform fitness application with workout plans, progress tracking and achievement system",
      githubUrl: "https://github.com/SemalFernando/fitness-app"
    },
    {
      id: 6,
      title: "Portfolio Website",
      problem: "Professionals needed modern, responsive portfolio sites to showcase their work effectively",
      solution: "Designed and developed custom portfolio website with modern UI/UX and optimal performance",
      githubUrl: "https://github.com/SemalFernando/portfolio"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">My <span>Projects</span></h2>

      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={projectImage} alt={project.title} />
                <div className="project-overlay">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <i className='bx bxl-github'></i>
                  </a>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;