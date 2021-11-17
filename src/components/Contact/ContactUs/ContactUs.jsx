import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <div id="contactus" className="contact-item">
            <hr className="contact-line" />
            <h2 className="contact-item-title">CONTACT US</h2>
            <div className="contactus-part">
                <h3 className="contact-detail">learn@ardentlbs.io</h3>
                <h3 className="contact-detail">949.496.1688</h3>
            </div>
            <div className="contactus-part">
                <h3 className="contact-detail">4199 Campus Drive</h3>
                <h3 className="contact-detail">Suite 260</h3>
                <h3 className="contact-detail">Irvine, CA 92612</h3>
            </div>
        </div>
    )
}

export default ContactUs
