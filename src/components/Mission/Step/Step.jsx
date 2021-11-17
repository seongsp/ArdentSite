import React from 'react'
import './Step.css';

function Step(props) {
    const {id, title, description} = props;
    return (
        <div className="step">
            <h1 className="step-id grey-2">{id}</h1>
            <hr className="step-line"/>
            <h3 className="size-36 blue-2 step-title">{title}</h3>
            <p className="size-18 grey-1">{description}</p>
        </div>
    )
}

export default Step
