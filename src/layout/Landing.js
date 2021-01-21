import React, { Fragment } from 'react';
import AppDownload from '../components/AppDownload/AppDownload';
import Cause from '../components/Cause/Cause';
import Event from '../components/EventsCarousel/Event';
import LandingSection from '../components/LandingSection/LandingSection';
import Theme from '../components/Theme/Theme';

const Landing = () => {
  return (
    <Fragment>
      <LandingSection />
      <Theme />
      <Cause />
      <AppDownload />
      <Event />
    </Fragment>
  );
};

export default Landing;
