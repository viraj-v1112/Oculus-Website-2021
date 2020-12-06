import React, { Fragment } from 'react';
import AppDownload from '../components/AppDownload/AppDownload';
import Cause from '../components/Cause/Cause';
import Footer from '../components/Footer/Footer';
import CustomNavbar from '../components/Navbar/CustomNavbar';

const Landing = () => {
  return (
    <Fragment>
      <CustomNavbar />
      <Cause />
      <AppDownload />
      <Footer />
    </Fragment>
  );
};

export default Landing;
