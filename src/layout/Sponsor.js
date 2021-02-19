import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/coming-soon.json';
import Sponsors from '../assets/OurSponsors.png';
import { animateScroll as scroll } from 'react-scroll';

const Sponsor = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	useEffect(() => {
		scroll.scrollToTop();
	}, []);

	return (
		<div className='back-app' style={{ height: '100vh', borderRadius: '0 1rem 0 0' }}>
			<div className='container-flex py-5 mx-5'>
				<div className='row py-0'>
					<img src={Sponsors} alt='Our Sponsors' className='event-logo-big' />
				</div>
				<Lottie
					options={defaultOptions}
					height={300}
					width={300}
					style={{ position: 'relative', top: '25%' }}
				/>
			</div>
		</div>
	);
};

export default Sponsor;
