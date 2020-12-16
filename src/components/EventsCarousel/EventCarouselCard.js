import React from 'react';
import './Events.css';

const EventCarouselCard = ({ imagePath, eventName }) => {
	return (
		<div className=' text-center'>
			<img src={imagePath} alt={eventName} className='event-image' />
			<p className='event-name'>{eventName}</p>
		</div>
	);
};

export default EventCarouselCard;
