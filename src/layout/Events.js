import React, { useState } from 'react';
import EventCard from '../components/Events/EventCard';
import EventLogo from '../assets/LandingSections/EventsLogo.png';

const Events = () => {
	const [ category, setCategory ] = useState('');

	return (
		<div className='back-app py-5' style={{ borderRadius: '0 1rem 0 0' }}>
			<div className='container-flex py-5 mx-5'>
				<div className='row py-0' onClick={() => setCategory('')}>
					<img src={EventLogo} alt='Our Events' className='event-logo-big' />
				</div>
				<div className='row mt-5'>
					<div className='col-4' onClick={() => setCategory('pronite')}>
						<div className='card category'>
							<img src='' alt='' />
							<h4>Pronite</h4>
						</div>
					</div>
					<div className='col-4'>
						<div className='card category' onClick={() => setCategory('technical')}>
							<img src='' alt='' />
							<h4>Technical</h4>
						</div>
					</div>
					<div className='col-4'>
						<div className='card category' onClick={() => setCategory('cultural')}>
							<img src='' alt='' />
							<h4>Cultural</h4>
						</div>
					</div>
				</div>
				<EventCard category={category} />
			</div>
		</div>
	);
};

export default React.memo(Events);
