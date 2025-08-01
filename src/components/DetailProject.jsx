import "./Detail.css";
import "../App.css"
import flowchartImg from '../images/project1/YOLO-SORT-flow.png';
import doc1Img from '../images/project1/p-doc1.png';
import doc2Img from '../images/project1/p-doc2.png';
import doc3Img from '../images/project1/p-doc3.png';
import doc4Img from '../images/project1/p-doc4.png';
import { PlayVideoIcon } from "../icon/PlayVideoIcon";
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
            <h2 className="detail-title">Tracking Drifting Victims Using YOLO and SORT</h2>
            <p className="detail-subtitle">Machine Learning Fullstack Project</p>
          </div>
          <div className="detail-container flowchart-text">
            <h4 className="detail-card-title">January - March 2025 </h4>
            <h4 className="detail-card-title">Laravel · YOLOv7/11 · Leaflet · Python · MySQL</h4>
            <div className="detail-card-title2 icon-links">
              <a
                href="https://github.com/IndahI/laravel-sort-yolo"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repo"
              >
                <MdiGithub />
                <span className="icon-label">View Code</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1EOBu0io__jPo9XV1gEe4jGR17-zGNdxO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                title="Video Live Demo"
              >
                <PlayVideoIcon />
                <span className="icon-label">View Demo Video</span>
              </a>
            </div>
            <p className="detail-detail">
              This project focuses on detecting and tracking humans or drifting objects (such as victims or ships) from drone videos using a combination of
              YOLO (You Only Look Once) for object detection and SORT (Simple Online and Realtime Tracking) for real-time object tracking.
              The aim is to support search-and-rescue operations by identifying moving objects in open water and visualizing their movement on a digital map using GPS coordinates.
              <br /><br />
              I conducted research and experimentation to train a custom YOLO model suited to drone-captured aerial imagery, instead of relying on pre-trained models.
              This involved preparing a tailored dataset, annotating objects, optimizing training parameters, and evaluating model performance for real-world application scenarios.
              <br /><br />
              As the backend developer and system integrator, I built the Laravel-based web platform and developed a Python integration that
              connects the trained YOLO and SORT tracking scripts with the backend controller. The system allows users to upload drone footage,
              which is then processed in real time. Detected objects are tracked across frames and geospatial data is extracted and mapped using Leaflet.js.
              <br /><br />
              The final output includes detection results displayed on a map, complete with metadata stored in a MySQL database for historical analysis.
              I also managed the entire deployment workflow, ensuring seamless interaction between the upload system, detection engine, and result visualization components.
            </p>

          </div>
          <div className="detail-container flowchart-image">
            <h4 className="detail-title2">System Flowchart</h4>
            <img src={flowchartImg} alt="System Flowchart" className="detail-image2" />
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
              <p className="caption">Figure 1: Local-hosted website landing page</p>
              <p className="caption">Figure 2: Detection history page with some detail result view</p>
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
              <p className="caption">Figure 3: Object movement visualization using Leaflet map</p>
              <p className="caption">Figure 4: Detected video display with bounding boxes</p>
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

