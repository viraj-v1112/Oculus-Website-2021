import React, { Fragment } from 'react';
import AppDownload from '../components/AppDownload/AppDownload';
import Footer from '../components/Footer/Footer';
// import MainHeader from '../components/Header/MainHeader';

const Landing = () => {
  return (
    <Fragment>
      {/* <MainHeader /> */}
      <AppDownload />
      <Footer />
    </Fragment>
  );
};

export default Landing;
