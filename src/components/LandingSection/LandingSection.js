import React, { Fragment } from 'react';
import './LandingSection.css';
import BackGif from '../../assets/Gif/Back.gif';
import Oculusfront from '../../assets/OculusLogoFront/Oculus Front.png';
// import O from '../../assets/OculusLogoFront/O.png';
// import C from '../../assets/OculusLogoFront/C.png';
// import U1 from '../../assets/OculusLogoFront/U1.png';
// import L from '../../assets/OculusLogoFront/L.png';
// import U2 from '../../assets/OculusLogoFront/U2.png';
// import S from '../../assets/OculusLogoFront/S.png';

const LandingSection = () => {
  return (
    <Fragment>
      <div className='landing-back'>
        {/* <img src={BackGif} className='gif-class' /> */}
        <img src={Oculusfront} alt='Oculus' className='oculus' />
        {/* <img src={O} alt='Oculus' className='O' />
        <img src={C} alt='Oculus' className='C' />
        <img src={U1} alt='Oculus' className='U1' />
        <img src={L} alt='Oculus' className='L' />
        <img src={U2} alt='Oculus' className='U2' />
        <img src={S} alt='Oculus' className='S' /> */}
      </div>
      <div className='smooth-gradient'></div>
    </Fragment>
  );
};

export default LandingSection;
