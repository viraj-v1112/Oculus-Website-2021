import React, { useEffect, useContext } from 'react';
import EventLogo from '../assets/LandingSections/EventsLogo.png';
import { useParams, useHistory } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Category_List } from '../components/EventsCarousel/EventList';
import EventContext from '../context/EventContext/EventContext';
import EventCardMap from '../components/Events/EventCardMap';
import EventCarousel from '../components/EventsCarousel/EventCarousel';
import ProniteMap from '../components/Pronites/ProniteMap';

const Events = () => {
  const { category } = useParams();
  const history = useHistory();
  const { events, getEvents, loading } = useContext(EventContext);
  useEffect(() => {
    scroll.scrollToTop();
    getEvents();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='back-app py-5' style={{ borderRadius: '0 1rem 0 0' }}>
      <div className='container py-5 px-4'>
        <div className='row py-0'>
          <img src={EventLogo} alt='Our Events' className='event-logo-big' />
        </div>

        <div className='row mt-5 laptop-nav '>
          <div className='col-1' />
          {Category_List.map((obj, index) => (
            <div
              key={index}
              className={`col-2 ${
                category === obj.category ? 'active-category' : 'not-active'
              }`}
              onClick={() => {
                if (category === obj.category) {
                  history.push('/events');
                } else history.push('/events/' + obj.category);
              }}
            >
              <div className='category' key={index}>
                <img src={obj.imagePath} alt={obj.category} />
              </div>
            </div>
          ))}
          <div className='col-1' />
        </div>

        <div className='mobile-nav my-3'>
          <EventCarousel
            autoplay={false}
            historyPush={false}
            CATEGORY={category}
            dots={false}
          />
        </div>
        {category === 'Pronites' ? (
          <ProniteMap
            eventList={events.filter((event) => {
              if (event.category === 'Pronites') return event;
            })}
            loading={loading}
          />
        ) : (
          <EventCardMap category={category} events={events} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default Events;
