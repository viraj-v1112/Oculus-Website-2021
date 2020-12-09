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
          <div className='col col-lg-6 col-md-6 col-sm-12 col-12 align-self-center'>
            <img src={AppLogo} alt='mobile-app' className='app-logo mb-5' />
            <p className='justify-para'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <CustomButton
              classname='button-center mt-4'
              buttonText='Download Now'
              link='/'
            />
          </div>
          <div className='col col-lg-6 col-md-6 col-sm-12 col-12 '>
            <img src={Mobile} alt='mobile-app' className='app-image' />
          </div>
        </div>
      </div>

      <div className='container mobile-app'>
        <div className='row px-0'>
          <img src={AppLogo} alt='mobile-app' className='app-logo' />
          <img src={Mobile} alt='mobile-app' className='app-image' />
        </div>
        <div className='row px-5 py-3'>
          <p className='justify-para'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <CustomButton
            classname='button-center'
            buttonText='Download Now'
            link='/'
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
