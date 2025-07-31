import "./AboutMe.css";

export default function AboutMe(){
    return(
        <div className="aboutMe">
          <div className="section-container w-75">
            <div className="section-title">Get to know me!</div>
              <p className="aboutMe-text text-justify">
                  I’m a Cloud-Oriented Full-Stack Developer specializing in
                  AI-powered web applications. I have hands-on experience
                  developing cloud-based systems, integrating AI models like YOLO
                  and TensorFlow, and deploying end-to-end solutions using AWS
                  services. My main interest lies in applying machine learning to
                  real-world challenges, particularly in real-time tracking
                  systems and AI-driven decision support tools.
                  <br />
                  <br />
                  I’m open to job opportunities where I can contribute, grow, and
                  continue building impactful technology. Feel free to reach out
                  if my profile aligns with what you're looking for.
              </p>
          </div>
        </div>
    );
}
