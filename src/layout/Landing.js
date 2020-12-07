import React, { Fragment } from 'react';
import AppDownload from '../components/AppDownload/AppDownload';
import Cause from '../components/Cause/Cause';
import Event from '../components/Events/Event';
import Footer from '../components/Footer/Footer';
import LandingSection from '../components/LandingSection/LandingSection';
import CustomNavbar from '../components/Navbar/CustomNavbar';

const Landing = () => {
  return (
    <Fragment>
      <CustomNavbar />
      <LandingSection />
      <Cause />
      <AppDownload />
      <Event />
      <Footer />
    </Fragment>
  );
};

export default Landing;
