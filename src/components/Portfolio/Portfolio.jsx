import React from 'react';
import ProjectImage from './ProjectImage/ProjectImage';
import ardentLogo from '../../assets/img/ardentLogo.jpg';
import stemForAll from '../../assets/img/stemForAllLogo.png';
import chia from '../../assets/img/chia.png';
import peerGenius from '../../assets/img/peerGenius.webp';
import voluntu from '../../assets/img/voluntu.png';
import './Portfolio.css';

const projectRow1 = [
    {
        title: "ardentLogo",
        imageSrc: ardentLogo
    },
    {
        title: "stemForAll",
        imageSrc: stemForAll
    }
]

const projectRow2 = [
    {
        title: "chia",
        imageSrc: chia
    },
    {
        title: "peerGenius",
        imageSrc: peerGenius
    },
    {
        title: "voluntu",
        imageSrc: voluntu
    }
]

function Portfolio() {
    return (
        <div id="portfolio-section">
            <h1 className="title grey-1">PORTFOLIO</h1>
            <div className="project-row">
                {
                    projectRow1.map((proj, idx) => (
                        <ProjectImage
                            key = {idx}
                            {...proj}
                        />
                    ))
                }   
            </div>
            <div className="project-row">
                {
                    projectRow2.map((proj, idx) => (
                        <ProjectImage
                            key = {idx}
                            {...proj}
                        />
                    ))
                }   
            </div>
        </div>
    )
}

export default Portfolio
