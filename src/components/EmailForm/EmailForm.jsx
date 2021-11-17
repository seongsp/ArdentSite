import React from 'react'
import './EmailForm.css'

function EmailForm() {
    return (
        <form className="email-form">
            <input type="email" name="email" className="email-input" placeholder="Email" />
            <textarea row="5" name="emailText" className="emailtext-input" placeholder="Type your message here..." ></textarea>
        </form>
    )
}

export default EmailForm
