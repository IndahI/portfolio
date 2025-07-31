import "./Detail.css";
import "../App.css"
import flowchartImg from '../images/project1/YOLO-SORT-flow.png';
import doc1Img from '../images/project1/p-doc1.png';
import doc2Img from '../images/project1/p-doc2.png';
import doc3Img from '../images/project1/p-doc3.png';
import doc4Img from '../images/project1/p-doc4.png';
import { PlayVideoIcon } from "../icon/PlayVideoIcon";
import { MdiGithub } from "../icon/MdiGithub";

export default function DetailProject() {
  return (
    <>
      <div className="content">
        <div className="detail z-4">
            <div className="detail-container title">
                <p className="detail-subtitle">Project</p>
                <h2 className="detail-title">Tracking Drifting Victims Using YOLO and SORT</h2>
                <p className="detail-subtitle">Machine Learning Fullstack Project</p>
            </div>
            <div className="detail-section-wrapper">
              <div className="grid-flowchart">
                <div className="detail-container flowchart-text">
                    <h4 className="detail-card-title">Januari - Maret 2025 </h4>
                    <h4 className="detail-card-title">Laravel, YOLOv7/11, Leaflet, Python, MySQL</h4>
                    <div className="detail-card-title2 icon-links">
                      <a 
                          href="https://github.com/IndahI/laravel-sort-yolo" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          title="GitHub Repo"
                        >
                          <MdiGithub />
                      </a>
                      <a 
                          href="https://drive.google.com/file/d/1EOBu0io__jPo9XV1gEe4jGR17-zGNdxO/view?usp=sharing" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          title="Video Live Demo"
                        >
                          <PlayVideoIcon />
                      </a>
                    </div>
                    <p className="detail-detail">
                        A web application for detecting humans and ships from drone 
                        videos using YOLO and object tracking. Detection results are 
                        visualized on a map using GPS coordinates. I built the Laravel 
                        backend and integrated the Python detection script with the controller. 
                        The system allows users to upload media, which is then processed and stored 
                        for later review. Results are also saved in a database to support historical 
                        tracking and analysis</p>
                </div>
                <div className="detail-container flowchart-image">
                    <h4 className="detail-title2">Flowchart Sistem</h4>
                    <img src={flowchartImg} alt="Flowchart Sistem" className="detail-image2"/>
                </div>
              </div>
            </div>
            <div className="detail-container">
                <h4 className="detail-title3">Dokumentasi</h4>
                <div className="grid-2 dokumentasi-atas">
                  <img src={doc1Img} alt="Dokumentasi 1" className="detail-image" />
                  <img src={doc2Img} alt="Dokumentasi 2" className="detail-image" />
                </div>
                <div className="grid-2 dokumentasi-bawah">
                  <img src={doc3Img} alt="Dokumentasi 3" className="detail-image" />
                  <img src={doc4Img} alt="Dokumentasi 4" className="detail-image" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

