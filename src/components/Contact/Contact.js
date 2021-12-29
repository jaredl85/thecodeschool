import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Start Learning</h2>
      <form className="contact-form">
        <div className="form-group">
          <div className="label-box">
            <label className="form-label">Name:</label>
          </div>
          <input className="form-input" />
        </div>
        <div className="form-group">
          <div className="label-box">
            <label className="form-label">Email:</label>
          </div>

          <input className="form-input" />
        </div>
        <div className="form-group">
          <div className="label-box">
            <label className="form-label">Phone:</label>
          </div>
          <input className="form-input" />
        </div>
        <div className="form-group">
          <div className="label-box">
            <label className="form-label">Program:</label>
          </div>
          <select className="form-input">
            <option value="FT front-end">Full-Time Front-End Bootcamp</option>
            <option value="FT back-end">Full-Time Back-End Bootcamp</option>
            <option value="UX">Full-Time UX Bootcamp</option>
            <option value="PT front-end">Part-Time Front-End Course</option>
            <option value="PT back-end">Part-Time Back-End Course</option>
            <option value="online">Online Full-Stack Course</option>
          </select>
        </div>
          <div className="submit-btn-box">
            <input type="submit" value="Submit" className="submit-btn" />
        </div>
      </form>
    </div>
  );
}
