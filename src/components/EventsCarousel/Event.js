import React from 'react';
import EventLogo from '../../assets/LandingSections/EventsLogo.png';
import EventCarousel from './EventCarousel';
import { animateScroll as scroll } from 'react-scroll';
import './Events.css';

const Event = () => {
	return (
		<div className='back-app mb-5'>
			<div className='container'>
				<div className='row py-0 mb-5'>
					<img src={EventLogo} alt='Our Events' className='events-logo' />
				</div>
				<EventCarousel autoplay={true} historyPush={true} />
			</div>

			{/* <button className='float-middle mt-5' onClick={() => scroll.scrollToTop()}>
				{' '}
				Up
			</button> */}
		</div>
	);
};

export default Event;
