import "./Detail.css";
import flowchartImg from '../images/project3/Defect-flow.png';
import doc1Img from '../images/project3/p3-doc1.png';
import doc2Img from '../images/project3/p3-doc2.png';
import doc3Img from '../images/project3/p3-doc3.png';
import doc4Img from '../images/project3/p3-doc4.png';
import { MdiGithub } from "../icon/MdiGithub";

export default function DetailProject() {
  return (
    <>
      <div className="content">
        <div className="detail z-4">
            <div className="detail-container title">
                <p className="detail-subtitle">Project</p>
                <h2 className="detail-title">Defect Tracking Monitoring System</h2>
                <p className="detail-subtitle">Internet of Thing Fullstack Project</p>
            </div>
            <div className="detail-section-wrapper">
              <div className="grid-flowchart">
                <div className="detail-container flowchart-text">
                    <h4 className="detail-card-title">Januari - Maret 2024</h4>
                    <h4 className="detail-card-title">ASP.NET, C# Windows Forms </h4>
                    <div className="detail-card-title2 icon-links">
                       <a
                          href="https://github.com/IndahI/Product_DefectRecord"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link"
                          title="GitHub Repo"
                        >
                          <MdiGithub />
                        </a>
                    </div>
                    <p className="detail-detail">
                        A desktop application for recording and monitoring defects 
                        (product defects) during the production process in a factory.
                         Built using the Model-View-Presenter (MVP) approach to separate 
                         logic, display, and data flow for easy management and testing. 
                         The system enables operators to input defect data in real time 
                         through a user-friendly Windows Forms interface. All defect records 
                         are stored in a local database to support reporting, tracking, 
                         and quality control analysis.</p>
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

