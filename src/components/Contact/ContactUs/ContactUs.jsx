import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div id="contactus" className="contact-item">
            <hr className="contact-line" />
            <h2 className="contact-item-title size-24">CONTACT US</h2>
            <div className="contactus-part">
                <p className="contact-detail size-18">learn@ardentlbs.io</p>
                <p className="contact-detail size-18">949.496.1688</p>
            </div>
            <div className="contactus-part">
                <p className="contact-detail size-18">4199 Campus Drive</p>
                <p className="contact-detail size-18">Suite 260</p>
                <p className="contact-detail size-18">Irvine, CA 92612</p>
            </div>
        </div>
    )
}

export default ContactUs
