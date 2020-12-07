import React from 'react';
import EventCard from './EventCard';
import './Events.css';
import { Event_List_1, Event_List_2 } from './EventText';

const EventCarousel = () => {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      // data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-target='#carouselExampleIndicators'
          data-slide-to='0'
          className='active'
        ></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <div className='carousel-div container'>
            {Event_List_1.map((event) => (
              <EventCard
                imagePath={event.imagePath}
                eventName={event.eventName}
                key={event.id}
              />
            ))}
          </div>
        </div>
        <div className='carousel-item'>
          <div className='carousel-div container'>
            {Event_List_2.map((event) => (
              <EventCard
                imagePath={event.imagePath}
                eventName={event.eventName}
                key={event.id}
              />
            ))}
          </div>
        </div>
        <div className='carousel-item'>
          <div className='carousel-div container'>Div 1</div>
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  );
};

export default EventCarousel;
