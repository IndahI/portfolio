import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdiGithub } from "../icon/MdiGithub";
import { MdiLinkedin } from "../icon/MdiLinkedin";
import "./LandingPage.css";

export default function LandingPage() {
  const landingRef = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (landingRef.current) observer.observe(landingRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const target = document.getElementById("about");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {inView && (
        <div className="floating-icons">
          <a href="https://github.com/IndahI" target="_blank" rel="noopener noreferrer">
            <MdiGithub />
          </a>
          <a href="https://www.linkedin.com/in/indah-ibtisyah-kharomi" target="_blank" rel="noopener noreferrer">
            <MdiLinkedin />
          </a>
        </div>
      )}

      <div ref={landingRef} className="box">
        <div className="section-container">
          <p className="section-title">Hi! I’m Indah Ibtisyah Kharomi</p>
          <p className="section-subtitle-xl">
            Cloud-Oriented Full-Stack Developer <br />
            Specializing in AI-Powered Web Apps
          </p>
          <div className="button-row">
            <a href="#projects" className="btn btn-primary">Projects</a>
            <a
              href="https://drive.google.com/file/d/1inCMEdzex5eMSdxRe33GQYnDoTi_T-yH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* === Scroll Down Button, hanya saat landing masih terlihat === */}
      {inView && (
        <div className="scroll-down" onClick={scrollToProjects}>
          <FaChevronDown className="scroll-icon" />
        </div>
      )}
    </>
  );
}
