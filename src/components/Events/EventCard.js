import React, { useState } from 'react';
import ReactMorph from 'react-morph';
import { createExpoIn } from '@popmotion/easing';
import CustomButton from '../../shared/CustomButton';
import { FaRegCalendarCheck, FaHeart } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { Event_List } from './EventDetails';
import './EventCard.css';

const strongerEase = createExpoIn(3);
//eslint-disable-next-line
const AnimateCard = ({
	event: { eventName, imagePath, smallDesc, bigDesc, dates, prizes, reg, id },
	setIsCardOpen,
	setCardId,
	isCardOpen
}) => {
	return (
		<ReactMorph spring={{ stiffness: 170, damping: 26 }}>
			{({ from, go, hide, to }) => (
				<div className='container-card '>
					<a
						className='Card'
						{...hide()}
						onClick={() => {
							go(1);
						}}
					>
						<div>
							<h1 className='Card-title' {...from('title', { zIndex: 4 })}>
								{eventName}
							</h1>
						</div>
						<div {...from('cover', { zIndex: 2 })} className='Card-image'>
							<img src={imagePath} className='image' alt='ImageAlt' />
						</div>

						<div className='Card-footer'>
							<small {...from('left')}>
								140 <FaHeart className='text-danger' />
							</small>
							<small {...from('right')}>
								<FaRegCalendarCheck />
								{dates}
							</small>
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
						<div className='p1 justify-para' {...from('description')}>
							{smallDesc}
						</div>
					</div>

					<div className='details'>
						<div
							className='details-image'
							style={{
								backgroundImage: `url('${imagePath}')`
							}}
							alt='ImageAlt'
							{...to('cover')}
						/>

						<div className='details-title'>
							<div className='details-toolbar Card-footer'>
								<span {...to('left')}>
									<small>
										140 <FaHeart className='text-danger' />
									</small>
								</span>
								<span {...to('right')}>
									<small>
										<FaRegCalendarCheck /> {dates}
									</small>
								</span>
							</div>

							<h1 className='Card-title' {...to('title')}>
								{eventName}
							</h1>
						</div>

						<div className='details-content'>
							<div className='details-content-placeholder' {...to('content-placeholder')} />
							<div className='center l-flex c-white'>
								<div {...to('description')}>
									<div
										className='d-flex flex-row-reverse'
										onClick={() => {
											go(0);
										}}
									>
										<IoCloseSharp />
									</div>
									<div className='row'>
										<div className='col-lg-6 col-md-6 col-sm-12 col-12'>
											<h4>Event Description</h4>
											<p className='desc-text justify-para'>{bigDesc}</p>
										</div>
										<div className='col-lg-6 col-md-6 col-sm-12 col-12'>
											<h5>Prizes Worth</h5>
											<p className='desc-text'>{prizes}</p>

											<h5>Registration Fees</h5>
											<p className='desc-text'>{reg}</p>
											{/* <p className='desc-text'>₹200 - Team of 2</p> */}
										</div>
									</div>
									<CustomButton buttonText='Interested' gradient={false} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</ReactMorph>
	);
};

const EventCard = () => {
	const [ isCardOpen, setIsCardOpen ] = useState(false);
	const [ cardId, setCardId ] = useState(-1);

	return (
		<div className='row mt-4'>
			{Event_List.map((eventdet) => (
				<div
					key={eventdet.id}
					className={`col-lg-4 col-md-6 col-sm-12 col-12 mt-5 col-space-class ${isCardOpen &&
					cardId !== eventdet.id
						? 'blur'
						: ''}`}
					style={{ paddingTop: '40px', paddingBottom: '40px' }}
				>
					<AnimateCard event={eventdet} key={eventdet.id} />
				</div>
			))}
		</div>
	);
};

export default EventCard;
