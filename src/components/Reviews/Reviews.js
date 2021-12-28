import React, { useState } from "react";
import "./reviews.css";
import dataSlider from "./dataSlider.js";
import { baseUrl } from "../../baseUrl";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { FaQuoteRight } from 'react-icons/fa';

export default function Reviews() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
      if(slideIndex !== dataSlider.length) {
          setSlideIndex(slideIndex + 1)
      } else if (slideIndex === dataSlider.length) {
        setSlideIndex(1)
      }
  };

  const prevSlide = () => {
      if(slideIndex !== 1) {
          setSlideIndex(slideIndex - 1)
      } else if (slideIndex === 1) {
        setSlideIndex(dataSlider.length)
      }
  };

  return (
    <div className="reviews">
        <h2>Reviews</h2>
      <div className="container-slider">
        {dataSlider.map((person, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
              key={person.id}
            >
              <p className="review-text">{person.review}</p>
              <img src={person.image} alt={person.name} />
              <p className="review-name">{person.name}</p>
              <FaQuoteRight className="quote"/>
            </div>
          );
        })}
        <div className="slider-btn-group">
          <BsChevronLeft
            onClick={prevSlide}
            direction={"prev"}
            className="slider-icon slider-icon-left"
          />
          <BsChevronRight
            onClick={nextSlide}
            direction={"next"}
            className="slider-icon slider-icon-right"
          />
        </div>
      </div>
    </div>
  );
}
