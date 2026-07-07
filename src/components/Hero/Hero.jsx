import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';
import  profile from "../../assets/profile.png";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: personalInfo.roles,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="section-tag">Hello, I'm</span>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-role">
            <span ref={typedRef} />
          </h2>
          <p className="hero-tagline">{personalInfo.tagline}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={personalInfo.resumeFile} download className="btn btn-outline">
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="hero-photo-ring">
            <img src ={profile}
            alt="Akshata Bagewadi"
            className='hero-photo'/>
            
          </div>
          {/*<motion.span
            className="hero-float-chip chip-1"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            React.js
          </motion.span>
          <motion.span
            className="hero-float-chip chip-2"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Spring Boot
          </motion.span>
          <motion.span
            className="hero-float-chip chip-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Java
          </motion.span>*/}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
