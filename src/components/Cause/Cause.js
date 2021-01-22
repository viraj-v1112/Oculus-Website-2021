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
          <div className='col col-lg-6 col-md-6 col-sm-12 col-12 align-self-center py-5'>
            <div
              className='justify-para cause'
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              <p>
                Oculus 2021 will be supporting efforts of Goonj, an esteemed
                NGO, which aims to lessen the bridge between the rural and urban
                areas.
              </p>
              <p>
                Taking the collective responsibility for the betterment of the
                society, the students of SPIT will be organising a drive for
                contributing clothes and other essential supplies in order to
                support the needs of the people in disaster hit areas under the
                campaign called Rahat. The fest also aims to raise funds for
                disaster relief and rehabilitation programmes undertaken by
                Goonj in various parts of the country.
              </p>
              <p>
                Oculus 2021 will support this cause and work hand in hand to
                enhance organisation's humanitarian efforts.
              </p>
            </div>
            <CustomButton
              classname='button-center mt-4'
              buttonText='Donate Now'
              link='https://www.ketto.org/fundraiser/oculus-for-a-cause?utm_source=external_ct&utm_medium=whatsapp&utm_Campaign=sm_campaigner_sac_w4'
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
          <div className='text justify-para cause'>
            <p>
              Oculus 2021 will be supporting efforts of Goonj, an esteemed NGO,
              which aims to lessen the bridge between the rural and urban areas.
            </p>
            <p>
              Taking the collective responsibility for the betterment of the
              society, the students of SPIT will be organising a drive for
              contributing clothes and other essential supplies in order to
              support the needs of the people in disaster hit areas under the
              campaign called Rahat. The fest also aims to raise funds for
              disaster relief and rehabilitation programmes undertaken by Goonj
              in various parts of the country.
            </p>
            <p>
              Oculus 2021 will support this cause and work hand in hand to
              enhance organisation's humanitarian efforts.
            </p>
          </div>
        </div>
        <CustomButton
          classname='button-center mt-2'
          buttonText='Donate Now'
          link='https://www.ketto.org/fundraiser/oculus-for-a-cause?utm_source=external_ct&utm_medium=whatsapp&utm_Campaign=sm_campaigner_sac_w4'
          gradient
        />
      </div>
    </div>
  );
};

export default Cause;
