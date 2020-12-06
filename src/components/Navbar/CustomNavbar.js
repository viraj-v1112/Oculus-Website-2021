import React from 'react';
import './CustomNavbar.css';
import logo from '../../assets/images/Oculus white Logo.png';

const CustomNavbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-transparent'>
      <a className='navbar-brand' href='https://oculus.spit.ac.in/home/'>
        <img src={logo} className='logo-icon' />
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div
        className='collapse navbar-collapse text-right'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item '>
            <a className='nav-link' href='#'>
              Events
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Donation Drive
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Sponsors
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
