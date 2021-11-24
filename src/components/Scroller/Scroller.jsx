import React from 'react';
import { Link } from 'react-scroll';
import './Scroller.css';

function Scroller() {
  return (
    <div id="scroller">
      <Link activeClass="active" to="navbar-section" spy={true} smooth={true} />
      <Link
        activeClass="active"
        to="mission-section"
        spy={true}
        smooth={true}
      />
      <Link activeClass="active" to="about-section" spy={true} smooth={true} />
      <Link
        activeClass="active"
        to="portfolio-section"
        spy={true}
        smooth={true}
      />
      <Link
        activeClass="active"
        to="internship-section"
        spy={true}
        smooth={true}
      />
      <Link activeClass="active" to="footer" spy={true} smooth={true} />
    </div>
  );
}

export default Scroller;
