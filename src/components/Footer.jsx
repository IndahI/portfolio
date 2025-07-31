import { MdiGithub } from "../icon/MdiGithub";
import { MdiLinkedin } from "../icon/MdiLinkedin";
import "./Footer.css"; 

export default function Footer(){
    return(
        <footer className="footer">
            <div className="container footer-content">
                <div className="left">
                    © 2025 Indah Ibtisyah Kharomi. All rights reserved.
                </div>
                <div className="right icons-group">
                    <MdiLinkedin className="icon" color="white" />
                    <MdiGithub className="icon" color="white" />
                </div>
            </div>
        </footer>
    );
}