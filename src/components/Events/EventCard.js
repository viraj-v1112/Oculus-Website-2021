import React from 'react';
import './Events.css';

const EventCard = ({ imagePath, eventName, style }) => {
	return (
		<div className='col-lg-4 col-sm-12 col-12 text-center px-0' style={style}>
			<img src={imagePath} alt={eventName} className='event-image' />
			<p className='event-name'>{eventName}</p>
		</div>
	);
};

export default EventCard;
