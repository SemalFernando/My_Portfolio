import './Projects.css';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import project6 from '../../assets/project6.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MediCentric Mobile App",
      problem: "Patients often forget to bring medical reports to appointments or risk losing important documents, causing delays in treatment",
      solution: "Developed QR-code based medical records system where each patient has a unique QR code that medical staff can scan to instantly access their complete medical history and reports",
      githubUrl: "https://github.com/SemalFernando/MediCentric_Mobile_App",
      image: project1
    },
    {
      id: 2,
      title: "Task Management Application",
      problem: "Individuals and teams need a simple way to organize, track, and manage their daily tasks efficiently",
      solution: "Built a clean task management application with full CRUD operations, task categorization, and intuitive user interface for effective task organization",
      githubUrl: "https://github.com/SemalFernando/Task-Management-Application",
      image: project2
    },
    {
      id: 3,
      title: "MediBridge",
      problem: "Hospitals struggle to efficiently connect with donors and NGOs using traditional methods like leaflets and posters",
      solution: "Created a centralized platform that bridges hospitals with donors and NGOs, facilitating seamless donations and resource sharing through digital connectivity",
      githubUrl: "https://github.com/SemalFernando/IDEALIZE_2025_MediBridge",
      image: project3
    },
    {
      id: 4,
      title: "TURSACart E-Commerce",
      problem: "Traditional shopping carts lack smart features for automated authentication and payment processing",
      solution: "Developed IoT-based smart cart system with user authentication, item tracking, and automated payment processing for seamless shopping experience",
      githubUrl: "https://github.com/SemalFernando/TURSACart_Web_User",
      image: project4
    },
    {
      id: 5,
      title: "Disaster Routing System",
      problem: "During emergencies, people struggle to find the nearest available shelters and optimal routes to safety",
      solution: "Built intelligent routing system using Dijkstra's algorithm to show shortest paths to shelters with real-time capacity tracking and full-shelter notifications",
      githubUrl: "https://github.com/SemalFernando/Disaster_Routing_System",
      image: project5
    },
    {
      id: 6,
      title: "CoffeeShop Management",
      problem: "Coffee shops need modern digital interfaces to manage orders and enhance customer experience",
      solution: "Designed and developed responsive frontend application for coffee shop operations including customer interface",
      githubUrl: "https://github.com/SemalFernando/CoffeeShop_Frontend",
      image: project6
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
                <img src={project.image} alt={project.title} />
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

      <div className="projects-btn-box">
        <a
          href="https://github.com/SemalFernando?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Other Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;