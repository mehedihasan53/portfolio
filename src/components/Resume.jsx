import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <div className="header-content">
          <img 
            src="https://i.ibb.co.com/pB6jcchy/profile.avif" 
            alt="Mehedi Hasan Emon" 
            className="profile-image"
          />
          <div className="header-text">
            <h1>MEHEDI HASAN EMON</h1>
            <div className="title">Full-Stack Developer & SEO Specialist</div>
            <div className="contact-info">
              <span>mehedihasan.codes3@gmail.com</span>
              <span>github.com/mehedihasan53</span>
              <span>linkedin.com/in/mehedi-hasan-c3</span>
              <span>facebook.com/mehadi.hassan.1153</span>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="section">
          <h2>Professional Summary</h2>
          <div className="summary">
            Hi, I'm Mehedi Hasan Emon — a MERN stack developer with a passion for building clean, modern web applications.
            I'm a BSc in Computer Science and Engineering graduate from City University, where I built a strong foundation in software development, algorithms, and system design.
            My programming journey began on Programming Hero, where I took my first steps learning coding. Inspired by the top developers there, 
            I started my journey from the very beginning and gradually built my skills, focusing on React and full-stack development. 
            Over time, I've turned this learning into practical experience, creating responsive, user-friendly web interfaces and writing clean, maintainable code.
            I enjoy working on projects that challenge me creatively and technically—whether it's designing an interactive frontend, 
            optimizing performance, or integrating backend functionality. Outside of programming, I love traveling and exploring new things, 
            which often sparks fresh ideas for my projects. I approach challenges with curiosity, creativity, and persistence, 
            always aiming to grow both as a developer and as a person.
          </div>
        </div>

        <div className="section">
          <h2>Education</h2>
          <div className="education-item">
            <div className="education-header">
              <h3>Bachelor of Science in Computer Science and Engineering</h3>
              <div className="institution">City University</div>
              <div className="status">Graduate</div>
            </div>
            <div className="education-description">
              Comprehensive study in software development, algorithms, data structures, system design, and computer science fundamentals. 
              Built strong analytical and problem-solving skills that form the foundation of my development approach.
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Key Statistics</h2>
          <div className="stats">
            <div className="stat">
              <div className="number">1+</div>
              <div className="label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="number">20+</div>
              <div className="label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="number">100%</div>
              <div className="label">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js & React Hooks</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>JWT Authentication</li>
                <li>Clean Architecture</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Database & Tools</h3>
              <ul>
                <li>MongoDB & Mongoose</li>
                <li>Git & GitHub</li>
                <li>Vite & Webpack</li>
                <li>npm/yarn</li>
                <li>SEO Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project">
              <h3>Blood Donation Platform</h3>
              <p>A real-time platform connecting donors with patients in urgent need. Features include geolocation matching, appointment scheduling, and emergency alerts with Socket.io integration.</p>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Socket.io</span>
              </div>
            </div>

            <div className="project">
              <h3>PawMart Pet Shop</h3>
              <p>A comprehensive e-commerce solution for pet supplies. Includes custom shopping cart, secure Stripe payment integration, and admin dashboard for inventory management.</p>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Redux Toolkit</span>
                <span className="tech-tag">Stripe API</span>
                <span className="tech-tag">Express</span>
              </div>
            </div>

            <div className="project">
              <h3>GameHub</h3>
              <p>Dynamic video game discovery app using the rawg.io API. Features infinite scrolling, advanced filtering, and responsive dark-mode UI with TypeScript implementation.</p>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Chakra UI</span>
                <span className="tech-tag">Axios</span>
              </div>
            </div>

            <div className="project">
              <h3>Book Store</h3>
              <p>An online bookstore featuring robust inventory management, JWT-based user authentication, and recommendation engine with modern UI design.</p>
              <div className="tech-stack">
                <span className="tech-tag">MERN Stack</span>
                <span className="tech-tag">JWT</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Core Competencies</h2>
          <div className="competencies">
            <div className="competency-item">
              <strong>MERN Stack Development:</strong> Full-stack application development with MongoDB, Express.js, React.js, and Node.js, focusing on scalable architecture and modern development practices.
            </div>
            <div className="competency-item">
              <strong>Frontend Excellence:</strong> Creating responsive, interactive user interfaces with modern JavaScript frameworks, ensuring optimal user experience across all devices.
            </div>
            <div className="competency-item">
              <strong>Backend Architecture:</strong> Building scalable APIs and server-side applications with clean, maintainable code and robust security implementations.
            </div>
            <div className="competency-item">
              <strong>SEO Optimization:</strong> Technical SEO implementation and e-commerce platform optimization for better search rankings and improved visibility.
            </div>
            <div className="competency-item">
              <strong>Problem Solving:</strong> Analytical approach to complex technical challenges with focus on user experience and performance optimization.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume