import React from 'react';
import './Footer.css';
import { Social_List } from './FooterText';

const Footer = () => {
  return (
    <div className='back'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col col-lg-4 col-md-12 col-sm-12 col-12'>
            <ul>
              <div id='logo' />
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
              <li className='col-2-text'>Events</li>
              <li className='col-2-text'>Donation Drive</li>
              <li className='col-2-text'>Sponsors</li>
              <li className='col-2-text'>Our Team</li>
              <li className='col-2-text'>Downloads</li>
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
                  <a href={social.link}>
                    <img
                      src={social.imagePath}
                      alt={social.name}
                      style={{
                        height: '3rem',
                        width: '3rem',
                      }}
                    ></img>
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
