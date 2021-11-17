import React from 'react';
import './Job.css';

function Job(props) {
    const {title, description} = props;

    return (
        <div className="job-object">
            <h2 className="job-title grey-text">{title}</h2>
            <p className="job-description">{description}</p>
        </div>
    )
}

export default Job
