import React from 'react';


import ourStory from '../../assets/img/ourStory.svg';
import ourVision from '../../assets/img/ourVision.svg';
import technology from '../../assets/img/technology.svg';

import './About.css';
import Detail from './Detail/Detail';

const details = [
    {
        title: "OUR STORY",
        description: "Ardent Labs' team of entrepreneurs develop business ideas in learning science and technology. The minimum viable product (MVP) of these ideas are quickly developed and tested to get feedback and market validation. Successful MVPs will receive seed funding to fully develop the app. The most promising ones get spun-off as independent companies by the lead entrepreneur(s) from the lab upon receiving venture funding.",
        imageSrc: ourStory
    },
    {
        title: "OUR VISION",
        description: "Artificial Intelligence and 5G Networks are disruptive technologies that will lead to highly interactive and personalized learning experiences for students, more effective learning management tools for teachers, and holistic evaluation of student performance for parents. We invest in companies, incubate start-ups, and develop software and solutions that meet the needs of next generation learning.",
        imageSrc: ourVision
    },
    {
        title: "TECHNOLOGY",
        description: "We develop technology that use big data and artificial intelligence to analyze student learning behavior. We design student profiles based on learning behavior, education environment, and parenting habits to determine which subject is the easiest to learn for the student, what should be the focus of instructors in either classroom or one-on-one sessions, and intelligent recommendations for parents to engage and encourage their child’s learning journey",
        imageSrc: technology
    }
]

function About() {
    return (
        <div className="about-section">
            <h1 className="title about-title">WHO WE ARE</h1>
            {
                details.map((detail, idx) => (
                    <Detail
                        key = {idx}
                        {...detail}
                    />
                ))
            }
        </div>
    )
}

export default About
