import React, { useEffect, useState, useContext } from 'react';
import EventLogo from '../assets/LandingSections/EventsLogo.png';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Category_List } from '../components/EventsCarousel/EventList';
import EventContext from '../context/EventContext/EventContext';
import EventCardMap from '../components/Events/EventCardMap';

const Events = () => {
  const location = useLocation();
  const { events, getEvents } = useContext(EventContext);
  useEffect(() => {
    scroll.scrollToTop();
    getEvents();
    // eslint-disable-next-line
  }, []);

  const [category, setCategory] = useState(location.state?.category || '');

  return (
    <div className='back-app py-5' style={{ borderRadius: '0 1rem 0 0' }}>
      <div className='container-flex py-5 mx-5'>
        <div className='row py-0'>
          <img src={EventLogo} alt='Our Events' className='event-logo-big' />
        </div>

        <div className='row mt-5'>
          <div className='col-1' />
          {Category_List.map((obj, index) => (
            <div
              key={index}
              className={`col-2 ${
                category === obj.category ? 'active-category' : 'not-active'
              }`}
              onClick={() => {
                if (category === obj.category) {
                  setCategory('');
                } else setCategory(obj.category);
              }}
            >
              <div className=' category' key={index}>
                <img src={obj.imagePath} alt={obj.category} />
              </div>
            </div>
          ))}
          <div className='col-1' />
        </div>

        <EventCardMap category={category} events={events} />
      </div>
    </div>
  );
};

export default Events;
