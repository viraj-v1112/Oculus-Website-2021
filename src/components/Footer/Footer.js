import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { Social_List } from './FooterText';
import { animateScroll as scroll } from 'react-scroll';
import FooterLogo from '../../assets/FooterLogo/OculusLogoIcon.png';

const Footer = () => {
  return (
    <div className='back'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col col-lg-4 col-md-12 col-sm-12 col-12'>
            <ul>
              {/* <div id='logo' /> */}
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
              <li className='col-2-text'>Donation Drive</li>
              <li className='col-2-text'>Sponsors</li>
              {/* <li className='col-2-text'>Our Team</li> */}
              <li className='col-2-text'>Download App</li>
            </ul>
          </div>
          <div className='col col-lg-4 col-md-6 col-sm-12 col-12'>
            <ul>
              <li className='col-3-head'>Contact Us</li>
              <li className='col-3-sub'>+917083054655</li>
              <li className='col-2-text' />
              <li className='col-3-head'>Join Us on</li>
              <div className='social-div'>
                {Social_List.map((social) => (
                  <a href={social.link} key={social.id}>
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
