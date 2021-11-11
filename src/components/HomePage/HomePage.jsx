import React from 'react';
import './HomePage.css';
import Banner from "../Banner/Banner"
import Purpose from '../Purpose/Purpose';

function HomePage() {
    return (
        <div id="homepage-section">
            <div id="homepage-top-section">
                <Banner />
            </div>

            <main id="homepage-content">
                <Purpose />
                
            </main>

        </div>
    );
}

export default HomePage;