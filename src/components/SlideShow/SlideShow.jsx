import React from 'react';
import Carousel from 'nuka-carousel';
import './SlideShow.css';

import slideshow1 from '../../assets/img/slideshow1.jpg'
import slideshow2 from '../../assets/img/slideshow2.jpg'
import slideshow3 from '../../assets/img/slideshow3.jpg'

const attributes = {
    autoplay: true,
    autplayInterval: 2000,
    initialSlideHeight: 400,
    wrapAround: true
}

function SlideShow() {
    return (
        <>
            <div id="slideshow-section">
                <Carousel {...attributes}>
                    <img src={slideshow1} alt="slideshow1" />
                    <img src={slideshow2} alt="slideshow2" />
                    <img src={slideshow3} alt="slideshow3" />
                </Carousel>
            </div> 
        </>
    );
}

export default SlideShow;