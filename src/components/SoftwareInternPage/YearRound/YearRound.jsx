import React from 'react';
import { Link } from 'react-router-dom';
import './YearRound.css';

function YearRound() {
  return (
    <div id="yearRound">
      <hr className="se-page-line" />
      <div className="size-58" id="year-round-title">
        YEAR-ROUND INTERNSHIP PROGRAM
      </div>
      <div className="size-21 bolder">
        Interested in developing a career in leading tech companies? Consider
        participating in our summer internship, which is a part of our
        comprehensive year-round internship program! This program consists of
        three stages where each stage drives interns towards ultimately creating
        an MVP (Minimum Viable Product) and taking charge of their product
        vision from start to finish.
      </div>
      <a
        className="size-24 bolder"
        id="learnmore"
        href="https://ead60fcc-40f3-4b04-9c66-485499008c9a.filesusr.com/ugd/132a22_10acddd2d98747ed97eae09cef4f048e.pdf"
      >
        LEARN MORE ABOUT OUR PROGRAM HERE
      </a>
      <div className="size-21 bolder">
        If you are interested in applying, please send your resume and
        transcript to <span className="email-interest">info@ardentlabs.io</span>
        .
      </div>
    </div>
  );
}

export default YearRound;
