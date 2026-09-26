import "./App.css";

function App() {
  const skills = [
    "Linux Administration",
    "Windows Server",
    "Networking",
    "Active Directory",
    "Docker",
    "AWS",
    "Nginx / Apache",
    "Bash Scripting",
    "Backup & Recovery",
    "System Monitoring",
  ];

  const projects = [
    {
      title: "Linux Server Management",
      description:
        "Configured and maintained Linux servers, users, permissions, SSH access, services, firewall rules, and system updates.",
      tech: ["Linux", "Ubuntu", "SSH", "Bash"],
    },
    {
      title: "Docker Application Deployment",
      description:
        "Containerized web applications using Docker and managed application deployments with Docker Compose.",
      tech: ["Docker", "Docker Compose", "Linux"],
    },
    {
      title: "Server Monitoring System",
      description:
        "Created a basic monitoring setup to track CPU, memory, disk usage, uptime, and server availability.",
      tech: ["Linux", "Monitoring", "Shell Script"],
    },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span>&lt;/&gt;</span> Admin<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="terminal-text">
              <span>$</span> whoami
            </p>

            <h1>
              Hi, I'm <span>Your Name</span>
            </h1>

            <h2>Server Administrator</h2>

            <p className="hero-description">
              I manage, monitor, secure, and maintain servers and IT
              infrastructure. I enjoy working with Linux, Windows Server,
              networking, cloud technologies, and automation.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View My Work
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="server-card">
            <div className="card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">server@portfolio:~</span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="green">$</span> systemctl status server
              </p>

              <p className="status">
                ● Server is running
              </p>

              <p>
                <span className="green">$</span> uptime
              </p>

              <p>up 99.9% — all systems operational</p>

              <p>
                <span className="green">$</span> skills
              </p>

              <p>Linux • Docker • AWS • Networking</p>

              <p>
                <span className="green">$</span>{" "}
                <span className="cursor">_</span>
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="section-title">
            <span>01.</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div>
              <p>
                I'm a passionate Server Administrator interested in building
                reliable, secure, and efficient IT infrastructure.
              </p>

              <p>
                My interests include server management, troubleshooting,
                networking, system security, virtualization, cloud computing,
                and automation.
              </p>

              <p>
                I continuously learn new technologies and enjoy solving
                infrastructure problems.
              </p>
            </div>

            <div className="info-box">
              <div>
                <strong>Location</strong>
                <span>India</span>
              </div>

              <div>
                <strong>Role</strong>
                <span>Server Administrator</span>
              </div>

              <div>
                <strong>Experience</strong>
                <span>2+ Years</span>
              </div>

              <div>
                <strong>Availability</strong>
                <span className="available">● Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <div className="section-title">
            <span>02.</span>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-icon">▣</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="section-title">
            <span>03.</span>
            <h2>Experience</h2>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Server Administrator</h3>
                <p className="company">Your Company Name</p>
              </div>

              <span className="date">2024 — Present</span>
            </div>

            <ul>
              <li>Managed Linux and Windows servers.</li>
              <li>Monitored CPU, memory, storage, and system performance.</li>
              <li>Configured users, permissions, SSH, and security policies.</li>
              <li>Performed server backups and recovery operations.</li>
              <li>Troubleshot network and application issues.</li>
              <li>Maintained server updates and security patches.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="section-title">
            <span>04.</span>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="folder">▰</span>
                  <span>↗</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact-section">
          <div className="section-title">
            <span>05.</span>
            <h2>Contact Me</h2>
          </div>

          <div className="contact-content">
            <p>
              Interested in working together or discussing server
              administration and infrastructure?
            </p>

            <a href="mailto:your.email@example.com" className="btn primary">
              Send Me an Email
            </a>

            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Built with <span>React</span> • Server Administrator Portfolio
        </p>
      </footer>
    </div>
  );
}

export default App;
