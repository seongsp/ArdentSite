import React from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import './NavBar.css';

import ardentLabsLogo from '../../assets/img/ardentLabsLogo.webp';

function NavBar() {
    console.log(useLocation());
    return (
        <header id="navbar-section">
            <HashLink to="/">
                <img src={ardentLabsLogo} id="ardent-labs-logo" alt="ardentLabsLogo" />
            </HashLink>
            <div id="navbar-links">
                <HashLink to="/" className={useLocation().pathname === "/" ? "link-active" : "link"}>Home</HashLink>
                <HashLink to="/software-engineering-remote-interns" className={useLocation().pathname === "/software-engineering-remote-interns" ? "link-active" : "link"}>Software Engineering Virtual Internship</HashLink>
                <HashLink smooth to="/#mission-section">Mission</HashLink>
                <HashLink smooth to="/#about-section">About</HashLink>
                <HashLink smooth to="/#portfolio-section">Portfolio</HashLink>

                <div className="dropdown">
                    <span>More...</span>
                    <div className="dropdown-content">
                        <div className="dropdown-link">
                            <HashLink smooth to="/#internship-section">Internships</HashLink>
                        </div>
                        <div className="dropdown-link">
                            <HashLink smooth to="/#contact-section">Contact</HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;