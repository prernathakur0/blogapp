import React from "react";
import './About.css';
import missionImg from './about/mission.png'; // Add your image paths here
import robotImg from './about/robot.png';
import exploreTechImg from './about/explore.png'
import './heroimg'
const About = () => {
  return (

    
    <div className="about-container">
      <h1 style={{ 
      fontSize: '2rem', 
      color: 'darkred', 
      fontStyle: 'italic',  // Change this to 'normal' for regular font style
      fontWeight: 'bold'    // Change this to 'normal' for regular font weight
    }}> About GadgetHUB</h1>


      <div className="zigzag-section">
        <div className="text-content">
         
          <p>
            Welcome to <strong>GadgetHUB</strong>—your one-stop destination for the latest and greatest in technology and innovation. At GadgetHUB, we believe in the power of technology to transform lives, making everyday tasks simpler, more efficient, and a lot more fun!
          </p>
        </div>
        <div className="image-content">
          <img src={missionImg} alt="Our Mission" />
        </div>
      </div>

      <div className="zigzag-section reverse">
        <div className="text-content">
          <p>
            Our mission is to bridge the gap between innovation and accessibility, ensuring that everyone can experience the benefits of the latest technological advancements. We carefully curate our product selections, working with top brands and emerging innovators to provide you with a diverse range of high-quality gadgets that suit your needs and lifestyle.
          </p>
        </div>
        <div className="image-content">
          <img src={robotImg} alt="Futuristic Technology" />
        </div>
      </div>

      <div className="zigzag-section">
        <div className="text-content">
          <p>
            At GadgetHUB, we’re at the forefront of the future, bringing you the latest in robotics and AI technology. From smart assistants to cutting-edge automation, our products are designed to enhance your daily life with the most advanced innovations.
          </p>
        </div>
        <div className="image-content">
          <img src={exploreTechImg} alt="Explore Tech" />
        </div>
      </div>
    </div>
  );
};

export default About;
