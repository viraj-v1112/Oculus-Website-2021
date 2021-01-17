import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Events.css';

const EventCarouselCard = ({ imagePath, category, historyPush, setCategory, CATEGORY }) => {
	const history = useHistory();
	return (
		<div className=' text-center'>
			<img
				src={imagePath}
				alt={category}
				className='event-image'
				onClick={() => {
					if (historyPush) {
						history.push({
							pathname: '/events',
							state: { category: category }
						});
					} else {
						if (CATEGORY === category) setCategory('');
						else setCategory(category);
					}
				}}
			/>

			{/* <p className='event-name'>{eventName}</p> */}
		</div>
	);
};

export default EventCarouselCard;
