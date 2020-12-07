import React from 'react';
import './Events.css';

const EventCard = ({ imagePath, eventName }) => {
  return (
    <div>
      <img src={imagePath} alt={eventName} className='event-image' />
      <p className='event-name'>{eventName}</p>
    </div>
  );
};

export default EventCard;
