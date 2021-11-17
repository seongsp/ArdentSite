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
                <a href="https://www.linkedin.com/company/ardentlabs/mycompany/" target="_blank" rel="noreferrer noopener">
                    <img src={linkedIn} alt="linkedIn" className="social-icon" />
                </a>
                <a href="https://www.facebook.com/ArdentLabs.io" target="_blank" rel="noreferrer noopener">
                    <img src={facebook} alt="linkedIn" className="social-icon" />
                </a>
                <a href="https://twitter.com/ArdentLabsNews" target="_blank" rel="noreferrer noopener">
                    <img src={twitter} alt="linkedIn" className="social-icon" />
                </a>
            </div>
        </div>
    )
}

export default Connect
