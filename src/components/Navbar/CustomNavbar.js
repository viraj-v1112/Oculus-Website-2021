import React from 'react';
import './CustomNavbar.css';
import logo from '../../assets/Oculus white Logo.png';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
			<a className='navbar-brand' href='https://oculus.spit.ac.in/home/'>
				<img src={logo} className='logo-icon' alt='logo' />
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>

			<div className='collapse navbar-collapse text-right' id='navbarSupportedContent'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item '>
						<p className='nav-link'>
							<Link to='/events'>Events</Link>
						</p>
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
