import React from 'react';
import './splash.css';

function Splash() {
    return (
      <div className="splash-container">
        <div className="splash">
          <div className="splash-content">
            <h1>Learn how to code</h1>
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
            <span class="splash-btn">Start Learning</span>
          </div>
        </div>
      </div>
    );
}

export default Splash