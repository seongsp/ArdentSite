import React from 'react';
import './Job.css';

function Job(props) {
    const {title, description} = props;

    return (
        <div className="job-object">
            <h2 className="size-24 grey-1">{title}</h2>
            <p className="size-18 grey-1">{description}</p>
        </div>
    )
}

export default Job
