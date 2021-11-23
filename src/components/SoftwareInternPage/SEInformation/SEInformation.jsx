import React from 'react';
import './SEInformation.css';

import Question from '../../../assets/img/question.svg';
import Pencil from '../../../assets/img/pencil.svg';
import Laptop from '../../../assets/img/laptop.svg';
import Flag from '../../../assets/img/flag.svg';
import Person from '../../../assets/img/person.svg';
import Danial from '../../../assets/img/danial.png';
import Ryan from '../../../assets/img/ryan.png';
import Nisarg from '../../../assets/img/nisarg.png';
import Alvin from '../../../assets/img/alvin.png';
import Kuixi from '../../../assets/img/kuixi.png';

function SEInformation() {
  return (
    <div id="SEInformation">
      <div className="info">
        <div className="info-box">
          <div className="info-heading">
            <img src={Question} alt="question" />
            <h1 className="info-section-header">
              Why should you intern at Ardent Labs?
            </h1>
          </div>

          <p className="info-desc size-21 bolder">
            Our mission is to provide interns the support and resources needed
            to develop both professional and technical skills that will
            jump-start their career. Our last cohort of interns were accepted
            into major companies such as Google, Amazon, Walmart, Siemens, and
            Cerner Corporation.
          </p>

          <p className="info-desc size-21 bolder">
            As an Ardent Labs intern, every task given to you is never trivial,
            makes an impact, and most importantly, helps you learn something new
            and improve upon your current skills. You will also have the rare
            opportunity to gain mentorship from our lead software engineers, who
            will guide you through industry-standard software development
            practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SEInformation;
