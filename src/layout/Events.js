import React, { Fragment } from 'react';
import EventCard from '../components/EventCard/EventCard';
import CustomNavbar from '../components/Navbar/CustomNavbar';
import EventLogo from '../assets/LandingSections/EventsLogo.png';

const Events = () => {
  return (
    <Fragment>
      <CustomNavbar />
      <div className='back-app py-5'>
        <div className='container py-5'>
          <div className='row py-0'>
            <img src={EventLogo} alt='Our Events' className='events-logo' />
          </div>
          <EventCard />
        </div>
      </div>
    </Fragment>
  );
};

export default Events;
