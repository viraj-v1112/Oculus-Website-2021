import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { Social_List } from './FooterText';
import { animateScroll as scroll } from 'react-scroll';
import FooterLogo from '../../assets/FooterLogo/OculusLogoIcon.png';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const Footer = () => {
  return (
    <div className='back'>
      <div className='container-fluid'>
        <IoIosArrowDropupCircle
          className='custom-fab'
          onClick={() => scroll.scrollToTop()}
        ></IoIosArrowDropupCircle>
        <div className='row'>
          <div className='col col-lg-4 col-md-12 col-sm-12 col-12'>
            <ul>
              <img src={FooterLogo} alt='oculus' className='logo' />
              <p className='college-name-text'>
                SARDAR PATEL INSTITUTE OF TECHNOLOGY
              </p>
              <p className='college-add-text'>
                Munshi Nagar, Andheri(W), Mumbai-400058
              </p>
            </ul>
          </div>
          <div className='col col-lg-4 col-md-6 col-sm-12 col-12 footer-links'>
            <ul>
              <NavLink to='/events' exact>
                <li className='col-2-text' onClick={() => scroll.scrollToTop()}>
                  Events
                </li>
              </NavLink>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.ketto.org/fundraiser/oculus-for-a-cause?utm_source=external_ct&utm_medium=whatsapp&utm_Campaign=sm_campaigner_sac_w4'
              >
                <li className='col-2-text'>Donation Drive</li>
              </a>
              <NavLink to='/sponsors' exact>
                <li className='col-2-text'>Sponsors</li>
              </NavLink>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://play.google.com/store/apps/details?id=com.spit.fest.oculus'
              >
                <li className='col-2-text'>Download App</li>
              </a>
            </ul>
          </div>
          <div className='col col-lg-4 col-md-6 col-sm-12 col-12'>
            <ul>
              <li className='col-3-head'>Contact Us</li>
              <li className='col-3-sub'>+91 7083054655 , +91 9833462525</li>

              <li className='col-3-head'>Join Us on</li>
              <div className='social-div'>
                {Social_List.map((social) => (
                  <a
                    href={social.link}
                    key={social.id}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={social.imagePath}
                      alt={social.name}
                      style={{
                        height: '3rem',
                        width: '3rem',
                      }}
                    />
                  </a>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
