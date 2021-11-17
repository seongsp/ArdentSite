import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ardentLabsLogo from '../../assets/img/ardentLabsLogo.webp';
import './NavBar.css';

function NavBar() {
    return (
        <header id="navbar-section">
            <HashLink to="/">
                <img src={ardentLabsLogo} id="ardent-labs-logo" alt="ardentLabsLogo" />
            </HashLink>
            <div id="navbar-links" className="size-14">
                <HashLink to="/" className={useLocation().pathname === "/" ? "link-active" : "link"}>Home</HashLink>
                <HashLink to="/software-engineering-remote-interns" className={useLocation().pathname === "/software-engineering-remote-interns" ? "link-active" : "link"}>Software Engineering Virtual Internship</HashLink>
                <HashLink smooth to="/#mission-section" className="link">Mission</HashLink>
                <HashLink smooth to="/#about-section" className="link">About</HashLink>
                <HashLink smooth to="/#portfolio-section" className="link">Portfolio</HashLink>

                <div className="dropdown">
                    <span>More...</span>
                    <div className="dropdown-content">
                        <div className="dropdown-link">
                            <HashLink smooth to="/#internship-section" className="link">Internships</HashLink>
                        </div>
                        <div className="dropdown-link">
                            <HashLink smooth to="/#contact-section" className="link">Contact</HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;