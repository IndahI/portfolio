import "./LandingPage.css";
import { MdiGithub } from "../icon/MdiGithub";
import { MdiLinkedin } from "../icon/MdiLinkedin";

export default function LandingPage() {
  return (
    <>
      <div className="floating-icons">
        <a
          href="https://github.com/IndahI"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <MdiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/indah-ibtisyah-kharomi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <MdiLinkedin />
        </a>
      </div>

      <div className="box">
        <div className="section-container">
          <p className="section-title">Hi! I’m Indah Ibtisyah Kharomi</p>
          <p className="section-subtitle-xl">
            Cloud-Oriented Full-Stack Developer <br />
            Specializing in AI-Powered Web Apps
          </p>
          <div className="button-row">
            <a href="#projects" className="btn btn-primary">Projects</a>
            <a
              href="https://drive.google.com/file/d/1rplZzxMqlxtrSEzL23sCQf0aIZjfUUPH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
