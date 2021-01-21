import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import CustomModal from '../../shared/CustomModal';

const EventCardMap = ({ category, events, loading }) => {
	const [ eventList, setEventList ] = useState(events);
	const [ open, setOpen ] = useState(false);
	const [ oevent, setOevent ] = useState('');

	useEffect(
		() => {
			setEventList(events);
			if (category !== '') {
				const array = events.filter((event) => event.category === category);
				setEventList(array);
			}
			// eslint-disable-next-line
		},
		[ category, events ]
	);
	if (loading) {
		return <div>Loading</div>;
	} else
		return (
			<div className='row mt-4 text-center'>
				{eventList.map((eventdet, index) => (
					<div
						key={index}
						className={`col-lg-4 col-md-6 col-sm-12 col-12`}
						// style={{ float: 'none', margin: '0 auto' }}
					>
						<EventCard
							key={index}
							event={eventdet}
							handleOpen={() => {
								setOpen(true);
								setOevent(eventdet.eventName);
							}}
						/>
					</div>
				))}
				<CustomModal open={open} onClose={() => setOpen(false)} oevent={oevent} />
			</div>
		);
};

export default EventCardMap;
