import React from 'react';
// import './styles.css';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/coming-soon.json';
import Loading from '../shared/Loading';

const Sponsor = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='back-app' style={{ height: '100vh' }}>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        style={{ position: 'relative', top: '25%' }}
      />
    </div>
  );
};

export default Sponsor;
