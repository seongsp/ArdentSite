import React from 'react';
import EmailForm from '../EmailForm/EmailForm';
import './Internship.css';
import Job from './Job/Job';

const jobs = [
    {
        title: "Software Engineer",
        description: "Learn the agile development process, master the latest front and back-end development tools, and take charge of an app from conception to production."
    },
    {
        title: "UI/UX/Product Manager",
        description: "Learn how to develop beautiful user interface and meaningful user experience and jump start your career in product management."
    },
    {
        title: "Digital Marketer",
        description: "Learn how to market software applications via online and offline marketing media with a special emphasis on social media marketing."
    }
]

function Internship() {
    return (
        <div id="internship-section">
           <h1 className="title">INTERNSHIPS</h1>
           <div className="jobs">
            {
                jobs.map((job, idx) => (
                    <Job 
                        key = {idx}
                        {...job}
                    />
                ))
            }
                <div className="internship-contact-section">
                    <p className="intern-question">
                        Are you interested in developing a career and getting jobs at leading tech companies? Send us a short message and we will contact you shortly.
                    </p>
                    <EmailForm />
                </div>
           </div>           
        </div>
    )
}

export default Internship
