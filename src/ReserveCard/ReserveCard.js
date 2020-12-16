import React from 'react';
import './ReserveCard.css';

const ReserveCard = ({ name, date, time, number }) => {
  return (
    <div className="resy-card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{`Number of guests: ${number}`}</p>
      <button className="delete-button">Cancel</button>
    </div>
  );
};

export default ReserveCard;
