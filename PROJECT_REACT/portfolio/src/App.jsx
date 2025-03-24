import { useState, useEffect } from 'react'
import './App.css'
import chatbox from './images/chatbox.jpg'
import weaather from './images/weather.png'
import todo from './images/todo.jpeg'
import bharat from './images/bharat.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Add Font Awesome CDN
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    alert('Message sent successfully!');
    setContactForm({ name: '', email: '', message: '' });
  };

  const pro = [{
    id: 1,
    title: 'Interactive Chatbox',
    description: 'An interactive chatbox enables real-time messaging with users, displaying sent and received messages dynamically. It improves engagement and responsiveness in websites and apps.',
    tags: ['React', 'CSS', 'Java  Script'],
    image: chatbox
  }, {
    id: 2,
    title: 'Weather Detection',
    description: 'A Weather Detection App provides real-time weather updates based on user location or search queries. It displays temperature, humidity, wind speed, and forecasts using weather APIs, enhancing user convenience.',
    tags: ['React', 'CSS', 'JavaScript'],
    image: weaather
  }, {
    id: 3,
    title: 'TODO App',
    description: 'A To-Do List app helps users organize tasks efficiently by adding, editing, and deleting items. It improves productivity with features like due dates, categories, and task completion tracking.',
    tags: ['React', 'CSS', 'JavaScript'],
    image: todo
  }]

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#projects" onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#skills" onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
        </ul>
      </nav>

      {/* Photo Section - Moved to top */}
      <section id="photo" className="photo-section">
        <div className="photo-container">
          <div className="photo-wrapper animate-float">
            <img src={bharat} alt="Bharat Varfa" className="profile-photo" />
          </div>
          <div className="photo-content">
            <h1>Hi, I'm <span className="highlight">Bharat</span></h1>
            <h2>React Developer</h2>
            <p>I'm a passionate React developer with a keen eye for creating beautiful and functional user interfaces. With expertise in modern web technologies, I strive to build applications that make a difference.</p>
            <div className="quick-info animate-pulse">
              <div className="info-item">
                <span className="info-label">Experience</span>
                <span className="info-value">Fresher</span>
              </div>
              <div className="info-item">
                <span className="info-label">Projects</span>
                <span className="info-value">10+ Completed</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">View My Work</a>
              <a href="#contact" className="btn secondary-btn">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* Remove or comment out the hero section since we merged it with photo section */}
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
        {pro.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onMouseEnter={() => setIsHovered(project.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} style={{height : "200px", width: "100%"}}/>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="https://ayushbharatchatbox.netlify.app/" target="_blank" className="btn small-btn">View Demo</a>
              <a href="#" className="btn small-btn">Source Code</a>
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">React</div>
                <p>React</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">JS</div>
                <p>JavaScript</p>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">CSS</div>
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">Git</div>
                <p>Git</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">VS</div>
                <p>VS Code</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">Resp</div>
                <p>Responsive Design</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-details">
              <p><strong>Email:</strong> varfabharat19@gmail.com</p>
              <p><strong>Phone:</strong> +91 7415795995</p>
              <p><strong>Location:</strong> In Your Heart</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              required
            />
            <textarea
              placeholder="Your Message"
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              required
              rows="5"
            ></textarea>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Bharat 
          Varfa. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
