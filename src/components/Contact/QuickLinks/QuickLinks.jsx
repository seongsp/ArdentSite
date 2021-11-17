import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import './QuickLinks.css';

function QuickLinks() {
    return (
        <div id="quicklinks" className="contact-item">
            <hr className="contact-line" />
            <h2 className="contact-item-title size-24">QUICK LINKS</h2>
            <HashLink smooth to="/#" className={useLocation().pathname === "/" ? "link-active size-14" : "link size-14"}>Home</HashLink>
            <HashLink smooth to="/software-engineering-remote-interns/#" className={useLocation().pathname === "/software-engineering-remote-interns size-14" ? "link-active" : "link size-14"}>Software Engineering Virtual Internship</HashLink>
            <HashLink smooth to="/#mission-section" className="link size-14">Mission</HashLink>
            <HashLink smooth to="/#about-section" className="link size-14">About</HashLink>
            <HashLink smooth to="/#portfolio-section" className="link size-14">Portfolio</HashLink>
            <HashLink smooth to="/#internship-section" className="link size-14">Internships</HashLink>
            <HashLink smooth to="/#contact-section" className="link size-14">Contact</HashLink>
        </div>
    )
}

export default QuickLinks
