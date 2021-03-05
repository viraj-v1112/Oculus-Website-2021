import React from 'react';
import { useHistory } from 'react-router-dom';
import './Events.css';

const EventCarouselCard = ({ imagePath, category, historyPush, CATEGORY }) => {
  const history = useHistory();
  return (
    <div className=' text-center'>
      <img
        src={imagePath}
        alt={category}
        className='event-image'
        onClick={() => {
          if (historyPush) {
            history.push('/events/' + category);
          } else {
            if (CATEGORY === category) history.push('/events');
            else history.push('/events/' + category);
          }
        }}
      />
    </div>
  );
};

export default EventCarouselCard;
