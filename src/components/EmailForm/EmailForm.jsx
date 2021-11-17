import React from 'react';
import './EmailForm.css';

function submitEmailHandler(e) {
    e.preventDefault();
    return false;
}

function EmailForm() {
    return (
        <form className="email-form" onSubmit={submitEmailHandler}>
            <input type="email" name="email" className="email-input" placeholder="Email" />
            <textarea row="5" name="emailText" className="emailtext-input" placeholder="Type your message here..." ></textarea>
            <button className="submit-btn blue-1 link">Submit</button>
        </form>
    )
}

export default EmailForm
