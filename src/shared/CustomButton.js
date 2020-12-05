import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const Button = styled.button`
	background: linear-gradient(to right, #ed00cc, #3f2669, #3700af, #00cdef);
	border-radius: 2rem;
	border: none;
	color: #fff;
	font-family: Montserrat;
	font-weight: bold;
	font-size: 1.25rem;
	padding: 0.5rem 1.25rem;
`;

const CustomButton = ({ buttonText, link, classname }) => {
	return (
		<Button className={classname}>
			<Link to={link} style={{ textDecoration: 'none', color: '#fff' }}>
				{buttonText}
			</Link>
		</Button>
	);
};

export default CustomButton;
