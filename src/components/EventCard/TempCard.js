import React from 'react';
import ReactMorph from 'react-morph';
import './TempCard1.css';
import { createExpoIn, easeIn } from '@popmotion/easing';
import CustomButton from '../../shared/CustomButton';

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
								<small className='c-white'>Grossmünster</small>
							</span>
							<span {...from('right', { zIndex: 4 })}>
								<small className='c-white'>47.3769° N, 8.5417° E</small>
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
							<button className='separator t-left' {...from('sep', { zIndex: 3 })}>
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
								<small {...to('left')}>Grossmünster</small>
								<small {...to('right')}>47.3769° N, 8.5417° E</small>
							</div>

							<h1 className='Card-title' {...to('title')}>
								IPL AUCTION
							</h1>
						</div>

						<div className='details-content'>
							<div className='details-content-placeholder' {...to('content-placeholder')} />
							<div className='center l-flex'>
								<button {...to('sep')}> Intersted </button>
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
