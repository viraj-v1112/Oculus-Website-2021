import React from 'react';
import EventCard from '../components/Events/EventCard';
import EventLogo from '../assets/LandingSections/EventsLogo.png';

const Events = () => {
	return (
		<div className='back-app py-5' style={{ borderRadius: '0 1rem 0 0' }}>
			<div className='container-flex py-5 mx-5'>
				<div className='row py-0'>
					<img src={EventLogo} alt='Our Events' className='event-logo-big' />
				</div>
				<EventCard />
			</div>
		</div>
	);
};

export default React.memo(Events);
