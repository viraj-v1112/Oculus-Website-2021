import React from 'react';
import './CustomNavbar.css';
import logo from '../../assets/Oculus white Logo.png';
import { Link, NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import MobileNav from './MobileNav';
import { animateScroll as scroll } from 'react-scroll';

const CustomNavbar = (props) => {
	const scrollToBottom = () => {
		scroll.scrollToBottom();
	};

	return (
		<Fragment>
			<div className='laptop-nav'>
				<nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
					<NavLink to='/' exact className='navbar-brand' activeStyle={{ pointerEvents: 'none' }}>
						<img src={logo} className='logo-icon' alt='logo' />
					</NavLink>
					<div className='collapse navbar-collapse text-right'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item '>
								<p className='nav-link'>
									<NavLink exact to='/events' activeClassName='active-link'>
										Events
									</NavLink>
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
								<a className='nav-link' href='#' onClick={scrollToBottom} duration={2000}>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</nav>
				{props.children}
			</div>
			<div className='mobile-nav'>
				<MobileNav {...props} />
			</div>
		</Fragment>
	);
};

export default CustomNavbar;
