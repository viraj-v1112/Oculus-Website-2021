import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
	border-radius: 2rem;
	border: none;
	font-family: Montserrat;
	font-weight: bold;
	font-size: 1.25rem;
	padding: 0.5rem 1.25rem;
	margin: 0 auto;
	display: block;
	line-height: 1;
	cursor: pointer;
`;

const CustomButton = ({ buttonText, link, classname, animation, gradient, onClick, disable }) => {
	return (
		<Button
			className={classname}
			data-aos={animation}
			style={{
				background: gradient
					? 'linear-gradient(to right top,#ed00cc,#c722bf,#a32bae,#822e9c,#632c87,#533b8f,#434695,#335097,#176fb5,#008fcd,#00aee0,#00cdef)'
					: 'linear-gradient(to right, #fff,#fff)',
				color: gradient ? '#fff' : '#000'
			}}
			onClick={onClick}
			disabled={disable}
		>
			{link ? (
				<a href={link} style={{ textDecoration: 'none', color: 'inherit' }} target='_blank' rel='noreferrer'>
					{buttonText}
				</a>
			) : (
				buttonText
			)}
		</Button>
	);
};

export default CustomButton;
