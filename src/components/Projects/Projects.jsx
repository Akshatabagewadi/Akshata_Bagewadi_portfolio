import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="section-tag">Featured work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of things I've built — spanning full-stack web apps, machine learning, and hardware design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              className="project-card glass-card"
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={i * 130}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-icon-btn" aria-label="Live demo">
                    <FiExternalLink />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-btn" aria-label="GitHub repository">
                    <FiGithub />
                  </a>
                </div>
              </div>

              <div className="project-body">
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="pill" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <FiGithub /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
