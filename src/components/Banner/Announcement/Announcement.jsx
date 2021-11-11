import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Announcement.css';

function Announcement() {
    return (
        <div id="announcement-section">
            Looking for an internship? 
            <HashLink to="/software-engineering-remote-interns" id="se-intern-link"> Check out our Software Engineering Virtual Internship!</HashLink>
        </div>
    );
}

export default Announcement;