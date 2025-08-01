import "./Detail.css";
import flowchartImg from '../images/project3/Defect-flow.png';
import doc1Img from '../images/project3/p3-doc1.png';
import doc2Img from '../images/project3/p3-doc2.png';
import doc3Img from '../images/project3/p3-doc3.png';
import doc4Img from '../images/project3/p3-doc4.png';
import { MdiGithub } from "../icon/MdiGithub";
import { useState } from "react";

export default function DetailProject() {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (src) => {
    setZoomedImage(src);
  };

  const handleClose = () => {
    setZoomedImage(null);
  };

  return (
    <>
      <div className="content">
        <div className="detail z-4">
          <div className="detail-container title">
            <p className="detail-subtitle">Project</p>
            <h2 className="detail-title">Defect Tracking Monitoring System</h2>
            <p className="detail-subtitle">Internet of Thing Fullstack Project</p>
          </div>
          <div className="detail-container flowchart-text">
            <h4 className="detail-card-title">January – March 2024</h4>
            <h4 className="detail-card-title">ASP.NET · C# · Windows Forms · SQL </h4>
            <div className="detail-card-title2 icon-links">
              <a
                href="https://github.com/IndahI/Product_DefectRecord"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title="GitHub Repo"
              >
                <MdiGithub />
                <span className="icon-label">View Code</span>
              </a>
            </div>
            <p className="detail-detail">
              This desktop application was developed to record and monitor product defects during the factory production process, using the Model-View-Presenter (MVP) architecture to ensure modularity and ease of maintenance.
              <br /><br />
              I worked as part of a two-person team where I was initially responsible for the frontend, building the user interface in C# Windows Forms to allow operators to input defect data in real time. My teammate handled the backend logic and database management using ASP.NET and local SQL storage.
              <br /><br />
              As the project progressed, we collaborated closely and frequently switched roles, reviewing, testing, and contributing to each other’s code, since we were also working on another project with a similar structure. This cross-functional collaboration helped us ensure consistency and code quality across both projects.
              <br /><br />
              All defect data is stored in a local database to support reporting, tracking, and quality control analysis. The final application enables real-time input, structured data management, and systematic monitoring of production quality.
            </p>
          </div>
          <div className="detail-container flowchart-image">
            <h4 className="detail-title2">System Flowchart</h4>
            <img src={flowchartImg} alt="Flowchart Sistem" className="detail-image2" />
          </div>
          <div className="detail-container">
            <h4 className="detail-title2">Documentation</h4>
            <div className="grid-2 dokumentasi-atas">
              <img
                src={doc1Img}
                alt="Dokumentasi 1"
                className="detail-image"
                onClick={() => handleImageClick(doc1Img)}
                style={{ cursor: "zoom-in" }}
              />
              <img
                src={doc2Img}
                alt="Dokumentasi 2"
                className="detail-image"
                onClick={() => handleImageClick(doc2Img)}
                style={{ cursor: "zoom-in" }}
              />
            </div>
            <div className="grid-2 dokumentasi-atas-caption">
              <p className="caption">Figure 1: Login window displayed upon launching the application</p>
              <p className="caption">Figure 2: Home window after login, showing defect parts, settings, barcode part and user session info</p>
            </div>
            <div className="grid-2 dokumentasi-bawah">
              <img
                src={doc3Img}
                alt="Dokumentasi 3"
                className="detail-image"
                onClick={() => handleImageClick(doc3Img)}
                style={{ cursor: "zoom-in" }}
              />
              <img
                src={doc4Img}
                alt="Dokumentasi 4"
                className="detail-image"
                onClick={() => handleImageClick(doc4Img)}
                style={{ cursor: "zoom-in" }}
              />
            </div>
            <div className="grid-2 dokumentasi-bawah-caption">
              <p className="caption">Figure 3: Confirmation window after defect data validation with print option</p>
              <p className="caption">Figure 4: Settings window for configuration management</p>
            </div>
          </div>
        </div>
      </div>
      {zoomedImage && (
        <div className="image-modal" onClick={handleClose}>
          <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    </>
  );
}

