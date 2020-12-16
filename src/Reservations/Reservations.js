import React from 'react';
import ReserveCard from '../ReserveCard/ReserveCard';
import './Reservations.css';

const Reservations = ({ reservations }) => {
  const reserveCards = reservations.map((resy) => {
    return (
      <ReserveCard
        id={resy.id}
        name={resy.name}
        date={resy.date}
        time={resy.time}
        number={resy.number}
        key={resy.id}
      />
    );
  });

  return <div className="reservation-container">{reserveCards}</div>;
};

export default Reservations;
