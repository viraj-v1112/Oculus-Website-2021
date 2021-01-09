import React from 'react';
import Slider from 'react-slick';
import EventCarouselCard from './EventCarouselCard';
import { Event_List, Category_List } from './EventList';
import './Events.css';

const EventCarousel = () => {
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
					centerPadding: '350px'
				}
			},
			{
				breakpoint: 1224,
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
			{Category_List.map((category) => (
				<EventCarouselCard imagePath={category.imagePath} category={category.category} key={category.id} />
			))}
		</Slider>
	);
};

export default EventCarousel;
