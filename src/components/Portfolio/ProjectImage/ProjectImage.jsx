import React from 'react';
import './ProjectImage.css';

function ProjectImage(props) {
    const {title, imageSrc} = props;
    return (
        <div>
            <img src={imageSrc} alt={title} className="project-image"/>
        </div>
    )
}

export default ProjectImage
