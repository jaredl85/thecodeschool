import React from "react";
import "./about.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { SiGooglescholar } from "react-icons/si";
import workspace from "../../images/workspace.jpg";
import workspace2 from "../../images/workspace2.jpg";
import graduate from "../../images/graduate.jpg";
import city from "../../images/seattle.jpg";
import students from "../../images/coding.jpg";
import seattle2 from "../../images/seattle2.jpg";

export default function About() {
  return (
    <div className="about" id="about">
      <h2>The Coding School Difference</h2>
      <div className="about-wrapper">
        <div className="about-items">
          <MdLocationCity className="about-icon" />
          <p className="about-text">
            The Coding School is located in Seattle, Washington. We're
            surrounded by a vibrant and booming local tech community that
            regularly recruits from our pool of graduates.
          </p>
        </div>
        <div className="about-items">
          <FaChalkboardTeacher className="about-icon" />
          <p className="about-text">
            Our instructors are industry professionals with years of experience
            and a passion for teaching the next generation of software
            engineers.
          </p>
        </div>
        <div className="about-items">
          <GiDiploma className="about-icon" />
          <p className="about-text">
            Unlike many coding programs, we require an internship as a part of
            all of our programs, including our part-time and online programs
          </p>
        </div>
        <div className="about-items">
          <SiGooglescholar className="about-icon" />
          <p className="about-text">
            We offer generous scholarships for low-income students, veterans,
            persons of color, and LGBTQIA students.
          </p>
        </div>
      </div>
      <ul className="about-image-gallery">
        <li className="about-image-box">
          <img
            src={workspace}
            alt="the coding school"
            className="about-image"
          />
        </li>
        <li className="about-image-box">
          <img src={city} alt="seattle" className="about-image" />
        </li>
        <li className="about-image-box">
          <img src={graduate} alt="graduation" className="about-image" />
        </li>
      </ul>
      <ul className="about-image-gallery">
        <li className="about-image-box">
          <img src={students} alt="students" className="about-image" />
        </li>
        <li className="about-image-box">
          <img
            src={workspace2}
            alt="the coding school alternate view"
            className="about-image"
          />
        </li>
        <li className="about-image-box">
          <img
            src={seattle2}
            alt="alternate view of Seattle"
            className="about-image"
          />
        </li>
      </ul>
    </div>
  );
}
