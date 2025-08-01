import "./Detail.css";
import arsiImg from '../images/project2/architecture.png';
import doc1Img from '../images/project2/p2-doc1.jpg';
import doc2Img from '../images/project2/p2-doc2.jpeg';
import doc3Img from '../images/project2/p2-doc3.jpeg';
import doc4Img from '../images/project2/p2-doc4.jpeg';
import { PlayVideoIcon } from "../icon/PlayVideoIcon";
import { MdiGithub } from "../icon/MdiGithub";
import { useState } from "react";

export default function DetailProject2() {
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
            <h2 className="detail-title">Cancer detection in images using TensorFlow</h2>
            <p className="detail-subtitle">Artificial Intelligence Fullstack Project</p>
          </div>
          <div className="detail-container flowchart-text">
            <h4 className="detail-card-title">October – December 2024</h4>
            <h4 className="detail-card-title">Flask · AWS · SageMaker · Bedrock · S3 · MongoDB</h4>
            <div className="detail-card-title2 icon-links">
              <a
                href="https://github.com/IndahI/flask-website-capstone"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title="GitHub Repo"
              >
                <MdiGithub />
                <span className="icon-label">View Code</span>
              </a>
              <a
                href="https://drive.google.com/file/d/13u9HutpHy8vsIrIq6uZTW5QVE6SKMtWW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title="Live Demo"
              >
                <PlayVideoIcon />
                <span className="icon-label">View Demo Video</span>
              </a>
            </div>
            <p className="detail-detail">
              This project aims to assist medical diagnosis by automating the detection of cancer cells in medical images using deep learning.
              The solution leverages TensorFlow to build and train a convolutional neural network (CNN) model that identifies abnormal patterns in input images.
              <br /><br />
              I served as the project lead, responsible for directing the development workflow and ensuring seamless collaboration between team members
              in charge of the web interface, model deployment using SageMaker, and AI-enhanced analysis via Bedrock.
              I also oversaw the entire cloud architecture and took charge of integrating all modules into a centralized AWS environment.
              <br /><br />
              This full-stack web application allows users to upload images  through a front-end interface hosted on AWS EC2. The images are then routed through an
              Application Load Balancer to backend Flask APIs, which manage preprocessing and upload the data to Amazon S3.
              <br /><br />
              The trained model is deployed on Amazon SageMaker to run predictions, while Amazon Bedrock is integrated via AWS Lambda
              to generate AI-powered explanations or confidence summaries. The detection results are stored in a separate S3 output bucket, and
              all metadata including timestamps and user data are logged in DynamoDB.
              <br /><br />
              The system architecture is designed to be scalable and resilient, using API Gateway, EC2 Auto Scaling Groups, and multi-AZ deployment
              to ensure availability and performance.
            </p>

          </div>
          <div className="detail-container flowchart-image">
            <h4 className="detail-title2">System Architecture</h4>
            <img
              src={arsiImg}
              alt="System Architecture"
              className="detail-image3"
              onClick={() => handleImageClick(arsiImg)}
              style={{ cursor: "zoom-in" }}
            />
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
              <p className="caption">Figure 1: AWS Lambda console processing input and passing results to SageMaker</p>
              <p className="caption">Figure 2: Landing page website hosted via EC2</p>
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
              <p className="caption">Figure 3: AWS Bedrock integration demo featured on the website</p>
              <p className="caption">Figure 4: Cancer detection results from the SageMaker model</p>
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

