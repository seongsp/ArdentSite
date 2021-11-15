import React from 'react'
import './Detail.css';

function Detail(props) {
    const {title, description, imageSrc} = props;

    return (
        <div className="detail-object">
            <img src={imageSrc} alt={title + " image"} className="detail-image" />
            <div className="detail-words">
                <h2 className="detail-title">{title}</h2>
                <p className="detail-description">{description}</p>
            </div>
        </div>
    )
}

export default Detail
