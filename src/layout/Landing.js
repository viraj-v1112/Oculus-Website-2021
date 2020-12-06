import React, { Fragment } from 'react';
import AppDownload from '../components/AppDownload/AppDownload';
import Cause from '../components/Cause/Cause';
import Footer from '../components/Footer/Footer';

const Landing = () => {
	return (
		<Fragment>
			<Cause />
			<AppDownload />
			<Footer />
		</Fragment>
	);
};

export default Landing;
