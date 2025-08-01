import { MdiGithub } from "../icon/MdiGithub";
import { MdiLinkedin } from "../icon/MdiLinkedin";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="left">
                    © 2025 Indah Ibtisyah Kharomi. All rights reserved.
                </div>
                <div className="right icons-group">
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
            </div>
        </footer>
    );
}