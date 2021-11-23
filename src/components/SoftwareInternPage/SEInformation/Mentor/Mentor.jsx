import React from 'react';
import './Mentor.css';

function Mentor(props) {
  const { imageSrc, name, job, offer } = props;

  return (
    <div className="mentor">
      <img src={imageSrc} className="mentor-img" alt="name" />
      <div className="mentor-info">
        <div className="size-32 bolder">{name}</div>
        <div className="size-18 bolder">{job}</div>
        <div className="size-18 italic">{offer}</div>
      </div>
    </div>
  );
}

export default Mentor;
