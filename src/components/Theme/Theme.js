import React from 'react';
import ThemeLogo from '../../assets/Theme/Oculus theme.png';
import ThemePic from '../../assets/Theme/RetroTheme.jpg';
import './Theme.css';

const Theme = () => {
  return (
    <div>
      <div className='back-app back-app1'>
        <div className='container laptop-cause'>
          <div className='row py-0'>
            <img
              src={ThemeLogo}
              alt='Oculus For A Cause Title'
              className='theme-logo'
              data-aos='zoom-in'
              data-aos-duration='1000'
            />
          </div>
          <div className='row py-3 px-0'>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12 align-self-center py-5'>
              <p
                className='justify-para'
                data-aos='fade-right'
                data-aos-duration='1000'
              >
                We at SPIT believe that students cannot be called engineers with
                just their degrees. What makes us engineers is a holistic
                development of our perspectives and being equipped to solve
                problems, not just on circuits or computers, but also in the
                world around us. Oculus 2020 is proud to be associated with the
                Cancer Patients Aid Association, India’s oldest and largest
                cancer NGO, and be a part of its efforts to attain its noble
                goal
              </p>
            </div>
            <div
              className='col col-lg-6 col-md-6 col-sm-12 col-12 px-3 align-self-center '
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              <img
                src={ThemePic}
                alt='Oculus For a Cause'
                className='theme-image'
              />
            </div>
          </div>
        </div>
        <div className='mobile-cause container'>
          <div className='row px-0 py-3'>
            <img
              src={ThemeLogo}
              alt='Oculus For A Cause Title'
              className='theme-logo'
            />
            <img
              src={ThemePic}
              alt='Oculus For a Cause'
              style={{ width: '80%', display: 'block', margin: '0 auto' }}
            />
          </div>
          <div className='row px-5 align-self-center'>
            <p className='text justify-para'>
              We at SPIT believe that students cannot be called engineers with
              just their degrees. What makes us engineers is a holistic
              development of our perspectives and being equipped to solve
              problems, not just on circuits or computers, but also in the world
              around us. Oculus 2020 is proud to be associated with the Cancer
              Patients Aid Association, India’s oldest and largest cancer NGO,
              and be a part of its efforts to attain its noble goal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
