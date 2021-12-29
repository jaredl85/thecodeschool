import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../images/logo.png";
import './navbar.css';

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="navbar">
      <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
        <img src={logo} alt="logo" className="logo" />
      </Link>

      {(toggleMenu || screenWidth > 768) && (
        <ul className="nav">
          <Link
            className="nav-item"
            to="home"
            spy={false}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="nav-item"
            to="reviews"
            spy={false}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Testimonials
          </Link>
          <Link
            className="nav-item"
            to="courses"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Courses
          </Link>
          <Link
            className="nav-item"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
          <Link
            className="nav-item"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sign Up
          </Link>
        </ul>
      )}

      <button onClick={toggleNav} className="nav-btn">
        <GiHamburgerMenu />
      </button>
    </div>
  );
}