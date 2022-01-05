import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hmrf9qn",
        "template_ywkcgdl",
        form.current,
        "user_WUky3AspObOC2RTmTbBA3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <h2>Start Learning</h2>
      <form className="contact-form">
        <div className="form-group">
          <div className="label-box">
            <label className="form-label" htmlFor="name">Name:</label>
          </div>
          <input className="form-input" type="text" name="name" placeholder="Name" required/>
        </div>
        <div className="form-group">
          <div className="label-box">
            <label className="form-label" htmlFor="email">Email:</label>
          </div>

          <input className="form-input" type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <div className="label-box">
            <label className="form-label" htmlFor="phone">Phone:</label>
          </div>
          <input className="form-input" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone Number"/>
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
};
