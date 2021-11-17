import React from 'react';
import './HomePage.css';
import Banner from "../Banner/Banner"
import Purpose from '../Purpose/Purpose';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Internship from '../Internship/Internship';

function HomePage() {
    return (
        <div id="homepage-section">
            <div id="homepage-top-section">
                <Banner />
            </div>

            <main id="homepage-content">
                <Purpose />
                <About />
                <Portfolio />
                <Internship />
            </main>

        </div>
    );
}

export default HomePage;