import React from 'react';
import './Credit.css';

function getYear() {
    return new Date().getFullYear();
}

function Credit() {
    return (
        <div id="credit-section" className="blue-1">
            <div id="copyright">
                © {getYear()} by Ardent Labs
            </div>
        </div>
    )
}

export default Credit