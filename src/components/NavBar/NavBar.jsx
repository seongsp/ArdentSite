import React from 'react';
import './NavBar.css';

import ardentLabsLogo from '../../assets/img/ardentLabsLogo.webp';

function NavBar() {
    return (
        <header id="navbar">
            <img src={ardentLabsLogo} alt="ardentLabsLogo" />
            <span>Home</span>
            <span>Software Engineering Virtual Internship</span>
        </header>
    );
}

export default NavBar;