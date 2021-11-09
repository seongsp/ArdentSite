import React from 'react';
import backgroundVideo from '../../assets/vid/blueParticles1080p.mp4';
import './Background.css';

function Background() {
    return (
        <div id="background">
            <video autoPlay loop muted id='video'>
                <source src={backgroundVideo} type='video/mp4'/>
            </video>
        </div>
    );
}

export default Background;