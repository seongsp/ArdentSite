import React from 'react'
import './Step.css';

function Step(props) {
    const {id, title, description} = props;
    return (
        <div className="step">
            <h1 className="step-id">{id}</h1>
            <hr className="step-line"/>
            <h2 className="step-title">{title}</h2>
            <p className="step-description">{description}</p>
        </div>
    )
}

export default Step
