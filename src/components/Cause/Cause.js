import React from 'react';
import CustomButton from '../../shared/CustomButton';
import CauseLogo from '../../assets/LandingSections/CauseTitle.png';
import CauseImage from '../../assets/LandingSections/CauseImage.png';
import './Cause.css';

const Cause = () => {
  return (
    <div className='back-app'>
      <div className='container laptop-cause'>
        <div className='row py-0'>
          <img
            src={CauseLogo}
            alt='Oculus For A Cause Title'
            className='cause-logo'
            data-aos='zoom-in'
            data-aos-duration='1000'
          />
        </div>
        <div className='row py-3 px-0'>
          <div
            className='col col-lg-6 col-md-6 col-sm-12 col-12 px-3 align-self-center '
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <img
              src={CauseImage}
              alt='Oculus For a Cause'
              className='cause-image'
            />
          </div>
          <div className='col col-lg-6 col-md-6 col-sm-12 col-12 text-bg align-self-center py-5'>
            <p
              className='justify-para'
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              We at SPIT believe that students cannot be called engineers with
              just their degrees. What makes us engineers is a holistic
              development of our perspectives and being equipped to solve
              problems, not just on circuits or computers, but also in the world
              around us. Oculus 2021 is proud to be associated with Goonj, an
              esteemed NGO, which aims to build an equitable relationship of
              strength, sustenance and dignity between the cities and villages
              using the under-utilized urban material as a tool to triggger
              development with dignity, across the country.
            </p>
            <CustomButton
              classname='button-center mt-4'
              buttonText='Donate Now'
              link='/'
              animation='zoom-in'
              gradient
            />
          </div>
        </div>
      </div>
      <div className='mobile-cause container'>
        <div className='row px-0 py-3'>
          <img
            src={CauseLogo}
            alt='Oculus For A Cause Title'
            className='cause-logo'
          />
          <img
            src={CauseImage}
            alt='Oculus For a Cause'
            style={{ width: '80%', display: 'block', margin: '0 auto' }}
          />
        </div>
        <div className='row px-5 py-3 text-bg align-self-center'>
          <p className='text justify-para'>
            We at SPIT believe that students cannot be called engineers with
            just their degrees. What makes us engineers is a holistic
            development of our perspectives and being equipped to solve
            problems, not just on circuits or computers, but also in the world
            around us. Oculus 2021 is proud to be associated with Goonj, an
            esteemed NGO, which aims to build an equitable relationship of
            strength, sustenance and dignity between the cities and villages
            using the under-utilized urban material as a tool to triggger
            development with dignity, across the country.
          </p>
        </div>
        <CustomButton
          classname='button-center mt-2'
          buttonText='Donate Now'
          link='/'
          gradient
        />
      </div>
    </div>
  );
};

export default Cause;
