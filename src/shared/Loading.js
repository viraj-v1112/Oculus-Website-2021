import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/loading.json';
import Oculus from '../assets/OculusLogoFront/Oculus Front.png';

const Loading = () => {
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
        height={200}
        width={200}
        style={{ position: 'relative', top: '25%' }}
      />
      {/* <img src={Oculus} alt='Oculus' height={140} width={500} /> */}
    </div>
  );
};

export default Loading;
