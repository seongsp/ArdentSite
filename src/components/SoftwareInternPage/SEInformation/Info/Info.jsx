import React from 'react';
import './Info.css';

function Info(props) {
  const { title, imageSrc, infoList } = props;
  return (
    <div className="info">
      <div className="info-box">
        <img src={imageSrc} alt={title} />
        <div className="size-42">{title}</div>
      </div>
      {infoList.map((info) => (
        <p className="size-21 bolder info-desc">{info}</p>
      ))}
    </div>
  );
}

export default Info;
