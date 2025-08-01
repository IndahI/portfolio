import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollId = location.state?.scrollToId;

    if (scrollId) {
      setTimeout(() => {
        const element = document.getElementById(scrollId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); 
    }
  }, [location]);

  return (
    <div className="content">
      <section id="landing" className="section landing-section">
        <div className="container"><LandingPage /></div>
      </section>
      <section id="about" className="section about-section">
        <div className="container"><AboutMe /></div>
      </section>
      <section id="skill" className="section skills-section">
        <div className="container"><Skill /></div>
      </section>
      <section id="projects" className="section projects-section">
        <div className="container"><Projects /></div>
      </section>
      <section id="contact" className="section contact-section">
        <div className="container"><Contact /></div>
      </section>
    </div>
  );
}
