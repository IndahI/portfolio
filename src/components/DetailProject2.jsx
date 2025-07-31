import "./Detail.css";
import arsiImg from '../images/project2/architecture.png';
import doc1Img from '../images/project2/p2-doc1.jpg';
import doc2Img from '../images/project2/p2-doc2.jpeg';
import doc3Img from '../images/project2/p2-doc3.jpeg';
import doc4Img from '../images/project2/p2-doc4.jpeg';
import { PlayVideoIcon } from "../icon/PlayVideoIcon";
import { MdiGithub } from "../icon/MdiGithub";

export default function DetailProject2() {
  return (
    <>
      <div className="content">
        <div className="detail z-4">
            <div className="detail-container title">
                <p className="detail-subtitle">Project</p>
                <h2 className="detail-title">Cancer detection in images using TensorFlow</h2>
                <p className="detail-subtitle">Artificial Intelligence Fullstack Project</p>
            </div>
            <div className="detail-section-wrapper">
              <div className="grid-flowchart2">
                <div className="detail-container flowchart-text">
                    <h4 className="detail-card-title">Oktober - Desember 2024</h4>
                    <h4 className="detail-card-title">Flask, AWS, Sagemaker, Bedrock, AWS S3, MongoDB</h4>
                    <div className="detail-card-title2 icon-links">
                     <a
                        href="https://github.com/IndahI/flask-website-capstone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        title="GitHub Repo"
                      >
                        <MdiGithub />
                      </a>
                      <a
                        href="https://drive.google.com/file/d/13u9HutpHy8vsIrIq6uZTW5QVE6SKMtWW/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        title="Live Demo"
                      >
                        <PlayVideoIcon />
                      </a>
                    </div>
                    <p className="detail-detail">
                      A web-based system to detect cancer cells in medical images using 
                      TensorFlow-powered deep learning models. The application uses a Flask 
                      API backend deployed on AWS with a scalable and secure architecture.
                      
                      User-uploaded images are routed via an Application Load Balancer to EC2 
                      instances running Flask. The images are then processed and stored in S3 
                      (Input bucket). The detection model is hosted on Amazon SageMaker, while
                       Amazon Bedrock is integrated via Lambda for additional AI processing or enhancement.
                       
                       Results are stored in S3 Output and metadata is saved in DynamoDB for logging and audit 
                       purposes. An API Gateway facilitates communication between components, and the 
                       infrastructure supports auto-scaling and fault tolerance across multiple availability zones.
                       </p>
                </div>
                <div className="detail-container flowchart-image">
                    <h4 className="detail-title2">Arsitektur Sistem</h4>
                    <img src={arsiImg} alt="Arsitektur Sistem" className="detail-image2"/>
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

