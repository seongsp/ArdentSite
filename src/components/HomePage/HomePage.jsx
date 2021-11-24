import React from 'react';
import Banner from '../Banner/Banner';
import Mission from '../Mission/Mission';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Internship from '../Internship/Internship';
import './HomePage.css';
import Scroller from '../Scroller/Scroller';

function HomePage() {
  return (
    <div id="homepage-section">
      <div id="homepage-top-section">
        <Banner />
      </div>
      <aside>
        <Scroller />
      </aside>
      <main id="homepage-content">
        <Mission />
        <About />
        <Portfolio />
        <Internship />
      </main>
    </div>
  );
}

export default HomePage;
