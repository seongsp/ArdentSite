import React from 'react';
import SlideShow from '../SlideShow/SlideShow';
import Announcement from './Announcement/Announcement';
import './Banner.css';

function Banner() {
    return (
        <>
            <Announcement />
            <div id="banner-section">
                Next
                <br />
                Generation
                <br />
                Learning
                <br />
                <SlideShow />
            </div>
        </>
    );
}

export default Banner;