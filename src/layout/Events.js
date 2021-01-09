import React, { useEffect, useState } from 'react';
import EventCard from '../components/Events/EventCard';
import EventLogo from '../assets/LandingSections/EventsLogo.png';
import { Container, Button, Link } from 'react-floating-action-button';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Category_List } from '../components/EventsCarousel/EventList';

const Events = () => {
	const location = useLocation();
	useEffect(() => {
		scroll.scrollToTop();
	}, []);

	const [ category, setCategory ] = useState(location.state?.category || '');

	return (
		<div className='back-app py-5' style={{ borderRadius: '0 1rem 0 0' }}>
			<Container className='fab'>
					<Link href='#' tooltip='Create note link' icon='far fa-sticky-note' />
					<Link href='#' tooltip='Add user link' icon='fas fa-user-plus' />
					<Button
					className="fab-item btn btn-link btn-lg text-white"
						tooltip='The big plus button!'
						icon='fas fa-plus'
						rotate={true}
						onClick={() => alert('FAB Rocks!')}
					/>
				</Container>
			<div className='container-flex py-5 mx-5'>
				<div className='row py-0'>
					<img src={EventLogo} alt='Our Events' className='event-logo-big' />
				</div>

				<div className='row mt-5'>
					<div className='col-1' />
					{Category_List.map((obj) => (
						<div
							className={`col-2 ${category === obj.category ? 'active-category' : 'not-active'}`}
							onClick={() => {
								if (category === obj.category) {
									setCategory('');
								} else setCategory(obj.category);
							}}
						>
							<div className=' category'>
								<img src={obj.imagePath} alt={obj.category} />
							</div>
						</div>
					))}
					<div className='col-1' />
				</div>
				

				<EventCard category={category} />
			</div>
		</div>
	);
};

export default React.memo(Events);
