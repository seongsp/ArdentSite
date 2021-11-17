import React from 'react'
import './Connect.css'
import linkedIn from '../../../assets/img/linkedIn.png'
import facebook from '../../../assets/img/facebook.png'
import twitter from '../../../assets/img/twitter.png'

function Connect() {
    return (
        <div id="connect" className="contact-item">
            <hr className="contact-line" />
            <h2 className="contact-item-title">CONNECT</h2>
            <div className="social-items">
                <img src={linkedIn} alt="linkedIn" className="social-icon" />
                <img src={facebook} alt="linkedIn" className="social-icon" />
                <img src={twitter} alt="linkedIn" className="social-icon" />
            </div>

        </div>
    )
}

export default Connect
