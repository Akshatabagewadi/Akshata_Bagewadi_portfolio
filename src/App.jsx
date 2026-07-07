import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import CursorGlow from './components/CursorGlow/CursorGlow';
import FloatingBlobs from './components/FloatingBlobs/FloatingBlobs';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import EducationTimeline from './components/EducationTimeline/EducationTimeline';
import Leadership from './components/Leadership/Leadership';
import Certifications from './components/Certifications/Certifications';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Stats from './components/stats/stats';

import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });

    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      <FloatingBlobs />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Stats/>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationTimeline />
        <Leadership />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
