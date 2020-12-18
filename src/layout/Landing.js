import React, { Fragment } from 'react';
import AppDownload from '../components/AppDownload/AppDownload';
import Cause from '../components/Cause/Cause';
import Event from '../components/EventsCarousel/Event';
import LandingSection from '../components/LandingSection/LandingSection';

const Landing = () => {
	return (
		<Fragment>
			<LandingSection />
			<Cause />
			<AppDownload />
			<Event />
		</Fragment>
	);
};

export default Landing;
