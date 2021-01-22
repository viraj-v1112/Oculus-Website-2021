import React, { Fragment, useContext } from 'react';
import Oculusfront from '../../assets/OculusLogoFront/Oculus Front.png';
import Date from '../../assets/OculusLogoFront/Date.png';
import './LandingSection.css';
import EventContext from '../../context/EventContext/EventContext';

const LandingSection = () => {
  const { setLoading } = useContext(EventContext);
  return (
    <Fragment>
      <div className='landing-back' onLoad={setLoading}>
        <img src={Oculusfront} alt='Oculus' className='oculus' />
        <img src={Date} alt='date' className='oculus-date' />
      </div>
    </Fragment>
  );
};

export default LandingSection;
