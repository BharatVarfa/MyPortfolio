import { useState } from 'react'
import './App.css'
import chatbox from './images/chatbox.jpg'
import weaather from './images/weather.png'
import todo from './images/todo.jpeg'
import bharat from './images/bharat.jpg'
import './components/ContactForm.css'




function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`); // Debug log
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log form data
      console.log('Form submitted:', formData);
      
      // Show success message
      alert('Message sent successfully!');
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
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
          <li><a href="#contact" onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
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

      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i className="contact-icon">📧</i>
                <div>
                  <h4>Email</h4>
                  <p>varfabharat19@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="contact-icon">📱</i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 7415795995</p>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-btn">GitHub</a>
                <a href="#" className="social-btn">LinkedIn</a>
                <a href="#" className="social-btn">Twitter</a>
              </div>
            </div>
          </div>
          <div className="form-container">
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <input 
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
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
