import React from "react";
import "./courses.css";
import List from './list/List';
import js from "../../images/javascript.jpg";

export default function Courses() {
  const lists = [
    {
      id: "part-time",
      title: "part-time courses",
    },
    {
      id: "full-time",
      title: "full-time courses",
    },
    {
      id: "online",
      title: "online courses",
    },
  ];

  return (
    <div className="courses">
      <h2>Courses</h2>
      <ul>
          {lists.map((item => {
              <List 
                title={item.title}
              />
          }))}
      </ul>
      <div className="course-list">
        <div className="course-item">
          <img src={js} alt="javascript" className="course-item-img" />
          <h3 className="course-item-title">JavaScript Bootcamp</h3>
          <p>Course description goes here.</p>
        </div>
        <div className="course-item">
          <img src={js} alt="javascript" className="course-item-img" />
          <h3 className="course-item-title">JavaScript Bootcamp</h3>
          <p>Course description goes here.</p>
        </div>
        <div className="course-item">
          <img src={js} alt="javascript" className="course-item-img" />
          <h3 className="course-item-title">JavaScript Bootcamp</h3>
          <p>Course description goes here.</p>
        </div>
        <div className="course-item">
          <img src={js} alt="javascript" className="course-item-img" />
          <h3 className="course-item-title">JavaScript Bootcamp</h3>
          <p>Course description goes here.</p>
        </div>
        <div className="course-item">
          <img src={js} alt="javascript" className="course-item-img" />
          <h3 className="course-item-title">JavaScript Bootcamp</h3>
          <p>Course description goes here.</p>
        </div>
      </div>
    </div>
  );
}
