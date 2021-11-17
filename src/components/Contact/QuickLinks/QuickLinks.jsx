import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { useLocation, BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

import './QuickLinks.css'

function QuickLinks() {
    return (
        <div id="quicklinks" className="contact-item">
            <hr className="contact-line" />
            <h2 className="contact-item-title">QUICK LINKS</h2>
            <HashLink smooth to="/#" className={useLocation().pathname === "/" ? "link-active" : "link"}>Home</HashLink>
            <HashLink smooth to="/software-engineering-remote-interns/#" className={useLocation().pathname === "/software-engineering-remote-interns" ? "link-active" : "link"}>Software Engineering Virtual Internship</HashLink>
            <HashLink smooth to="/#mission-section">Mission</HashLink>
            <HashLink smooth to="/#about-section">About</HashLink>
            <HashLink smooth to="/#portfolio-section">Portfolio</HashLink>
            <HashLink smooth to="/#internship-section">Internships</HashLink>
            <HashLink smooth to="/#contact-section">Contact</HashLink>
        </div>
    )
}

export default QuickLinks
