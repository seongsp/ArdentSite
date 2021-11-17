import React from 'react';
import './Detail.css';

function Detail(props) {
    const {title, description, imageSrc} = props;

    return (
        <div className="detail">
            <img src={imageSrc} alt={title + " image"} className="detail-image" />
            <div className="detail-words">
                <p className="size-36">{title}</p>
                <p className="size-18">{description}</p>
            </div>
        </div>
    )
}

export default Detail
