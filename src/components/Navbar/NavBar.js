import React from 'react';
import './navbar.css';
import logo from '../../images/logo.png';

function NavBar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <ul className="nav">
                <li>Home</li>
                <li>Testimonials</li>
                <li>Courses</li>
                <li>About</li>
                <li>Connect</li>
            </ul>
        </div>
    )
}

export default NavBar
