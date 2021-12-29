import React, { useState, useEffect } from "react";
import "./courses.css";
import List from "./list/List";
import js from "../../images/javascript.jpg";
import { fullTimeCourses, partTimeCourses, onlineCourses } from "./data";

export default function Courses() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const lists = [
    {
      id: "featured",
      title: "full-time courses",
    },
    {
      id: "part-time",
      title: "part-time courses",
    },
    {
      id: "online",
      title: "online courses",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(fullTimeCourses);
        break;
      case "part-time":
        setData(partTimeCourses);
        break;
      case "online":
        setData(onlineCourses);
        break;
      default:
        setData(fullTimeCourses);
    }
  }, [selected]);

  return (
    <div className="courses" id="courses">
      <h2>Courses</h2>
      <ul>
        {lists.map((item) => (
          <List
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="course-list">
        {data.map((d) => (
          <div className="course-item">
            <img src={d.img} alt={d.title} className="course-item-img" />
            <h3 className="course-item-title">{d.title}</h3>
            <p>{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
