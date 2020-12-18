import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import logo from '../../assets/Oculus white Logo.png';
import './CustomNavbar.css';
import { animateScroll as scroll } from 'react-scroll';

const Phone = styled.div`
	position: relative;
	height: 100%;
	background: linear-gradient(to right bottom, #ed00cc, #3f2669, #3700af, #00cdef);
`;

const openStyles = css`transform: translateX(-150px) scale(0.95);`;

const Content = styled.div`
	border-radius: 1rem
	padding: 0rem 0;
	transform: translateX(0) scale(1);
	transition: 0.45s;
	${(p) => p.open && openStyles};
`;

const colorText = rgba('white', 1);
const colorSubtitle = rgba('white', 0.85);

const Burger = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	background: transparent;
	border: 0;
	padding: 2rem;
	font-size: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${colorText};
	outline: none;
	cursor: pointer;
`;

const Nav = styled.nav`
	position: absolute;
	top: 7%;
	right: 0;
	transform: translateY(-50%);
`;

const NavButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 44px;
	padding: 0 1rem;
	border: 0;
	background: transparent;
	color: ${colorSubtitle};
	cursor: pointer;
	&:hover {
		color: ${colorText};
	}
`;

const NavText = styled.span`
	font-size: 1.25rem;
	font-family: 'Baloo Tamma 2';
`;

export default function MobileNav({ children }) {
	const [ open, setOpen ] = useState(false);

	const onScroll = () => {
		if (open) setOpen(false);
	};

	window.addEventListener('scroll', onScroll);

	const scrollToBottom = () => {
		scroll.scrollToBottom();
	};
	return (
		<Phone
			onClick={() => {
				if (open) setOpen(false);
			}}
		>
			<Nav>
				<NavButton>
					<NavLink to='/events'>
						<NavText>Events</NavText>
					</NavLink>
				</NavButton>
				<NavButton>
					<NavText>Donation Drive</NavText>
				</NavButton>
				<NavButton>
					<NavText>Sponsors</NavText>
				</NavButton>
				<NavButton>
					<NavText onClick={scrollToBottom} duration={2000}>
						Contact Us
					</NavText>
				</NavButton>
			</Nav>
			<Content open={open}>
				<div className='nav-div'>
					<NavLink to='/'>
						<img src={logo} className='logo-icon' alt='logo' />
					</NavLink>
					<Burger className='uil uil-bars' onClick={() => setOpen(!open)} />
				</div>
				{children}
			</Content>
		</Phone>
	);
}
