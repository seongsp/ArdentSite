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
import Info from './Info/Info';
import Mentor from './Mentor/Mentor';

const infos = [
  {
    title: 'Why should you intern at Ardent Labs?',
    imageSrc: Question,
    infoList: [
      <>
        Our mission is to provide interns the support and resources needed to
        develop both professional and technical skills that will jump-start
        their career. Our last cohort of interns were accepted into major
        companies such as Google, Amazon, Walmart, Siemens, and Cerner
        Corporation.'
      </>,
      <>
        As an Ardent Labs intern, every task given to you is never trivial,
        makes an impact, and most importantly, helps you learn something new and
        improve upon your current skills. You will also have the rare
        opportunity to gain mentorship from our lead software engineers, who
        will guide you through industry-standard software development
        practices.'
      </>,
    ],
  },
  {
    title: 'What will you learn?',
    imageSrc: Pencil,
    infoList: [
      <>
        This internship provides aspiring software engineers the opportunity to
        learn modern web development tools such as HTML/CSS, JavaScript,
        React/React Native, GraphQL, and version control through Git.',
      </>,
    ],
  },
  {
    title: 'What will you do?',
    imageSrc: Laptop,
    infoList: [
      <>
        During the 8-10 weeks internship, interns will work on learning the
        tools used by our products through completing milestone projects. There
        will be four milestone projects to work on throughout the program that
        interns can complete at their own pace.
      </>,
      <>
        'Interns will be required to work at least 10 hours per week to make
        sufficient progress on these projects.',
      </>,
    ],
  },
  {
    title: 'When does the program end?',
    imageSrc: Flag,
    infoList: [
      <>
        This virtual internship takes place during the duration of UCI's spring
        quarter. The internship will end on June 5th, and interns who are
        interested in the summer internship will need to send in another
        application around May 10th. To learn more about about our summer
        internships,{' '}
        <a
          href="https://ead60fcc-40f3-4b04-9c66-485499008c9a.filesusr.com/ugd/132a22_10acddd2d98747ed97eae09cef4f048e.pdf"
          className="a-link"
        >
          click here
        </a>
        .
      </>,
    ],
  },
  {
    title: 'Meet the Mentors',
    imageSrc: Person,
    infoList: [
      <>
        Meet our lead software engineers, who have been offered full time jobs
        and internships from renowned tech companies such as Amazon and Western
        Digital:
      </>,
    ],
  },
];

const mentors = [
  {
    imageSrc: Danial,
    name: 'DANIAL',
    job: 'Software Engineer at Ardent Labs',
    offer: 'Full time job offer at Western Digital',
  },
  {
    imageSrc: Ryan,
    name: 'RYAN',
    job: 'Software Engineer at Ardent Labs',
    offer: 'Full time job offer at Amazon',
  },
  {
    imageSrc: Nisarg,
    name: 'NISARG',
    job: 'Software Engineer at Ardent Labs',
    offer: 'Full time job offer at Amazon',
  },
  {
    imageSrc: Alvin,
    name: 'ALVIN',
    job: 'Software Engineer at Ardent Labs',
    offer: 'Accepted intern at Amazon',
  },
  {
    imageSrc: Kuixi,
    name: 'KUIXI',
    job: 'Software Engineer at Ardent Labs',
    offer: 'Accepted intern at Amazon',
  },
];

function SEInformation() {
  return (
    <div id="SEInformation">
      {infos.map((info, idx) => (
        <Info key={idx} {...info} />
      ))}
      <div id="mentor-list">
        {mentors.map((mentor, idx) => (
          <Mentor key={idx} {...mentor} />
        ))}
      </div>
    </div>
  );
}

export default SEInformation;
