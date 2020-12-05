import React from 'react';
import './AppDownload.css';
import CustomButton from '../../shared/CustomButton';

// <CustomButton buttonText='Download Now' link='/' />

const AppDownload = () => {
  return (
    <div className='back-app'>
      <div className='container'>
        <div className='row p-5'>
          <div className='col col-lg-6 col-md-6 col-sm-12 col- 12'>
            <div className='app-logo'></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <CustomButton
              classname='button-center'
              buttonText='Download Now'
              link='/'
            />
          </div>
          <div className='col col-lg-6 col-md-6 col-sm-12 col- 12 mt-5'>
            <div className='app-image'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
