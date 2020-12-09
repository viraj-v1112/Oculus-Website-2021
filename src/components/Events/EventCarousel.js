import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Event_List } from './EventText';
import EventCard from './EventCard';
import './Events.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <button
      className={active ? 'indi-active' : 'indi'}
      onClick={() => onClick()}
    ></button>
  );
};

const TempCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      className='container'
      showDots={true}
      customDot={<CustomDot />}
      customTransition='all 1s ease-in-out'
      transitionDuration={500}
    >
      {Event_List.map((event) => (
        <EventCard
          imagePath={event.imagePath}
          eventName={event.eventName}
          key={event.id}
        />
      ))}
    </Carousel>
  );
};

export default TempCarousel;
