import React from 'react';
import ReactPlayer from 'react-player'
import Step from './Step/Step';
import demo from '../../assets/vid/demo.mp4';
import './Mission.css';

const steps = [
    {
        id: "01",
        title: "BUILD",
        description: "We develop apps and solutions to create better learning, teaching, and parenting experiences. We adopt the best industrial practices in software development, latest techniques in AI, and research-validated learning design principles to achieve maximum results."
    },
    {
        id: "02",
        title: "TRAIN",
        description: "We provide real-world, hands-on, and project-based training to high school and college students who are interested in developing apps, conducting scientific research using computing methods,  becoming entrepreneurs, or gain work experience in the tech industry."
    },
    {
        id: "03",
        title: "INCUBATE",
        description: "We provide internships and incubation to entrepreneurs who would like to start their own company or social ventures. Our network of advisers will help young entrepreneurs turn their ideas into winning business plan competitions, prototypes, and investment pitches."
    }
]

function Mission() {
    return (
        <div id="mission-section">
            <h1 className="title grey-1">WHAT WE DO</h1>
            <div className="step-items">
                {steps.map((step) => 
                    <div key={step.id} className="step-item"><Step {...step} /></div>
                )}
            </div>
            <div className="video-container">
                <ReactPlayer
                    url = {demo}
                    playing = {true}
                    width = "100%"
                    height = "100%"
                    controls = {true}
                />
            </div>
        </div>
    );
}

export default Mission;