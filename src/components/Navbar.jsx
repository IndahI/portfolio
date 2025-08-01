import "./Navbar.css";
import logo from "../assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (scrollToId) => {
    if (location.pathname === "/") {
      // Kalau sudah di Home, langsung scroll
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Kalau bukan di Home, redirect ke Home lalu scroll
      navigate("/", { state: { scrollToId } });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <div className="left">
          <button className="logo-button" onClick={() => handleNavClick("landing")}>
            <img src={logo} alt="Logo" className="navbar-logo" />
          </button>
        </div>
        <div className="right">
          <button onClick={() => handleNavClick("about")} className="navbarDetail">About</button>
          <button onClick={() => handleNavClick("skill")} className="navbarDetail">Skill</button>
          <button onClick={() => handleNavClick("projects")} className="navbarDetail">Projects</button>
          <button onClick={() => handleNavClick("contact")} className="navbarDetail">Contact</button>
          <button onClick={() => handleNavClick("landing")} className="navbarDetail">Home</button>
        </div>
      </div>
    </header>
  );
}
