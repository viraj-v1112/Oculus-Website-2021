import React, { Fragment } from 'react';
import EventLogo from '../../assets/LandingSections/EventsLogo.png';
import EventCarousel from './EventCarousel';
import './Events.css';

const Event = () => {
  return (
    <div className='container'>
      <div className='row py-0'>
        <img src={EventLogo} alt='Our Events' className='events-logo' />
      </div>
      <EventCarousel />
    </div>
  );
};

export default Event;
