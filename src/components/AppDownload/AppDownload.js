import React from 'react';
import './AppDownload.css';
import CustomButton from '../../shared/CustomButton';
import Mobile from '../../assets/LandingSections/MobileMockup.png';
import AppLogo from '../../assets/LandingSections/AppTitle.png';

const AppDownload = () => {
  return (
    <div className='back-app'>
      <div className='container laptop-app'>
        <div className='row py-5 px-0'>
          <div
            className='col col-lg-6 col-md-6 col-sm-12 col-12 align-self-center'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <img
              src={AppLogo}
              alt='mobile-app'
              className='app-logo mb-5 mx-auto d-block'
              data-aos='zoom-in'
              data-aos-duration='1000'
            />
            <p className='justify-para'>
              Don't want to miss any updates from Oculus?
            </p>
            <p className='justify-para'>
              Want to know more about our events and explore individual event's
              registration details, prizes apart from getting important
              reminders? Then look no further.
            </p>
            <p className='justify-para'>
              Oculus 2021's official app is the one stop for all your needs.
            </p>
            <CustomButton
              classname='button-center mt-4'
              buttonText='Download Now'
              link='https://play.google.com/store/apps/details?id=com.spit.fest.oculus'
              animation='zoom-in'
              gradient
            />
          </div>
          <div
            className='col col-lg-6 col-md-6 col-sm-12 col-12 '
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            <a
              href='https://play.google.com/store/apps/details?id=com.spit.fest.oculus'
              target='_blank'
              rel='noreferrer'
            >
              <img src={Mobile} alt='mobile-app' className='app-image' />
            </a>
          </div>
        </div>
      </div>

      <div className='container mobile-app'>
        <div className='row px-0'>
          <img src={AppLogo} alt='mobile-app' className='app-logo' />
          <a
            href='https://play.google.com/store/apps/details?id=com.spit.fest.oculus'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Mobile} alt='mobile-app' className='app-image' />
          </a>
        </div>
        <div className='row px-5 py-3'>
          <p className='justify-para'>
            Don't want to miss any updates from Oculus?
          </p>
          <p className='justify-para'>
            Want to know more about our events and explore individual event's
            registration details, prizes apart from getting important reminders?
            Then look no further.
          </p>
          <p className='justify-para'>
            Oculus 2021's official app is the one stop for all your needs.
          </p>
        </div>
        <CustomButton
          classname='button-center mt-2'
          buttonText='Download Now'
          link='https://play.google.com/store/apps/details?id=com.spit.fest.oculus'
          gradient
        />
      </div>
    </div>
  );
};

export default AppDownload;
