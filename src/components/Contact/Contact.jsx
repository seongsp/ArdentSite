import React from 'react';
import QuickLinks from './QuickLinks/QuickLinks';
import ContactUs from './ContactUs/ContactUs';
import Connect from './Connect/Connect';
import ardentLabsLogo from '../../assets/img/ardentLabsLogo.webp';
import './Contact.css';

function Contact() {
    return (
        <div id="contact-section">
            <div id="ardentlogo-img">
                <img src={ardentLabsLogo} alt="ardentLabsLogo" />
            </div>
            <QuickLinks />
            <ContactUs />
            <Connect />
        </div>
    )
}

export default Contact
