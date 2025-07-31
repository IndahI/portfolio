import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="section-container w-80 project">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        A selection of projects that demonstrate my technical capabilities and problem-solving skills.
      </p>
      <div className="grid-3">
        <Link to="/project/detect-track-human" className="card-link">
          <div className="card project-card">
            <h4 className="project-title">Tracking Drifting Victims Using YOLO and SORT</h4>
            <p className="project-detail">
              Laravel and JavaScript-based website using YOLOv7/v11 and SORT to detect and track humans and ships in videos, with results shown on a map and video.
            </p>
            <div className="flex-wrap">
              <span className="badge">AI/ML</span>
              <span className="badge">Python</span>
              <span className="badge">Laravel</span>
              <span className="badge">Bootstrap</span>
              <span className="badge">MySQL</span>
            </div>
          </div>
        </Link>

        <Link to="/project/cancer-detection" className="card-link">
          <div className="card project-card">
            <h4 className="project-title">Cancer detection in images using TensorFlow</h4>
            <p className="project-detail">
              Flask-based website for cancer image detection, classifying images as malignant or benign. Includes a Bedrock-powered chatbot and is hosted on AWS.
            </p>
            <div className="flex-wrap">
              <span className="badge">AI/ML</span>
              <span className="badge">AWS</span>
              <span className="badge">Flask</span>
              <span className="badge">MongoDB</span>
              <span className="badge">S3</span>
            </div>
          </div>
        </Link>

        <Link to="/project/defect-tracking" className="card-link">
          <div className="card project-card">
            <h4 className="project-title">Defect Tracking Monitoring System</h4>
            <p className="project-detail">
              ASP.NET-based app for logging defective items during quality checks. Users input defect details and personnel, then generate a receipt that is stored in the database.
            </p>
            <div className="flex-wrap">
              <span className="badge">IoT</span>
              <span className="badge">ASP.NET</span>
              <span className="badge">MySQL</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
