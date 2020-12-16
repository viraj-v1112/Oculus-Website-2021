import React from 'react';
import ReactMorph from 'react-morph';
import './TempCard1.css';
import { createExpoIn, easeIn } from '@popmotion/easing';
import CustomButton from '../../shared/CustomButton';
import { FaRegCalendarCheck } from 'react-icons/fa';

const strongerEase = createExpoIn(3);

const AnimateCard = () => {
	return (
		<ReactMorph spring={{ stiffness: 170, damping: 26 }}>
			{({ state, fadeIn, fadeOut, from, go, hiddenProps, hide, progress, seek, to }) => (
				<div className='container-card'>
					<a className='Card' {...hide()} onClick={() => go(1)}>
						<div>
							<h1 className='Card-title' {...from('title', { zIndex: 4 })}>
								IPL AUCTION
							</h1>
						</div>
						<div
							{...from('cover', { zIndex: 2 })}
							className='Card-image'
							style={{
								backgroundImage:
									'url("https://raw.githubusercontent.com/brunnolou/react-morph/master/examples/demo/public/zurich.jpg")'
							}}
							alt='Zurich landscape'
						/>

						<div className='Card-footer'>
							<span {...from('left', { zIndex: 4 })}>
								<small className='c-white'>Category</small>
							</span>
							<span {...from('right', { zIndex: 4 })}>
								<small className='c-white'>
									<FaRegCalendarCheck />Date
								</small>
							</span>
						</div>
					</a>

					<div className='Card-content'>
						<div
							className='Card-content-placeholder'
							{...from('content-placeholder', {
								zIndex: 1,
								easing: strongerEase
							})}
						/>
						<div />
						<div className='p1'>
							<button className='' {...from('sep', { zIndex: 3 })}>
								Intersted
							</button>
						</div>
					</div>

					<div className='details' onClick={() => go(0)}>
						<div
							className='details-image'
							style={{
								backgroundImage:
									'url("https://raw.githubusercontent.com/brunnolou/react-morph/master/examples/demo/public/zurich.jpg")'
							}}
							alt='Zurich landscape'
							{...to('cover')}
						/>

						<div className='details-title'>
							<div className='details-toolbar Card-footer'>
								<small {...to('left')}>Category</small>
								<small {...to('right')}>
									<FaRegCalendarCheck /> Date
								</small>
							</div>

							<h1 className='Card-title' {...to('title')}>
								IPL AUCTION
							</h1>
						</div>

						<div className='details-content'>
							<div className='details-content-placeholder' {...to('content-placeholder')} />
							<div className='center l-flex'>
								<div {...to('sep')}>
									cybersecurity competition designed to solve challenges in cryptography, computer
									networks and more. Scavenger Hunt to Reverse Engineering, we have got everything
									covered. You may also stand a chance to compete in the Oculus Coding League.
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</ReactMorph>
	);
};

// Create a new spring
const TempCard = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-6'>
					<AnimateCard />
				</div>
				<div className='col-6'>
					<AnimateCard />
				</div>
			</div>
		</div>
		// <AnimateCard />
	);
};

export default TempCard;
