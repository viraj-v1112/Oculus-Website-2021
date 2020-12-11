import React from 'react';
import Slider from 'react-slick';
import EventCard from './EventCard';
import './Events.css';
import { Event_List } from './EventText';

const TempCarousel = () => {
	const settings = {
		className: 'center',
		infinite: true,
		speed: 500,
		dots: true,
		focusOnSelect: true,
		useTransform: true,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 3000,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					centerMode: true,
					centerPadding: '300px'
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					centerMode: true,
					centerPadding: '250px'
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					infinite: true,
					dots: true,
					centerMode: true,
					centerPadding: '90px'
				}
			}
		]
	};

	return (
		<Slider {...settings}>
			{Event_List.map((event) => (
				<EventCard imagePath={event.imagePath} eventName={event.eventName} key={event.id} />
			))}
		</Slider>
	);
};

export default TempCarousel;
