import React from 'react';
import { Link } from "react-scroll";
import './splash.css';

function Splash() {
    return (
      <div className="splash-container">
        <div className="splash" id="home">
          <div className="splash-content">
            <h1>Learn to build web <br /> experiences using</h1>
            <div className="splash-title">
              <div className="splash-title-wrapper">
                <div className="splash-title-item">React</div>
                <div className="splash-title-item">JavaScript</div>
                <div className="splash-title-item">PHP</div>
                <div className="splash-title-item">PYTHON</div>
                <div className="splash-title-item">NODE</div>
                <div className="splash-title-item">Bootstrap</div>
                <div className="splash-title-item">Node</div>
                <div className="splash-title-item">MongoDB</div>
              </div>
            </div>
            <Link
              className="splash-btn"
              to="courses"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                Start Learning
              </Link>
            {/* <span class="splash-btn">Start Learning</span> */}
          </div>
        </div>
      </div>
    );
}

export default Splash