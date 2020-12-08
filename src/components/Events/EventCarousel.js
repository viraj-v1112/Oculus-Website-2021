import React from 'react';
import EventCard from './EventCard';
import './Events.css';
import { Event_List } from './EventText';

var carouselArray = [];
for (var index = 0; index < Event_List.length; index += 3) {
	var myChunk = Event_List.slice(index, index + 3);
	carouselArray.push(myChunk);
}

const EventCarousel = () => {
	return (
		<div
			id='eventCarousel'
			className='carousel slide carousel-multi-item py-5'
			data-ride='carousel'
			data-touch='true'
		>
			<div className='laptop-carousel'>
				<ol className='carousel-indicators m-0'>
					{carouselArray.map((eventArray, index) => (
						<li
							data-target='#eventCarousel'
							data-bs-slide-to={index}
							className={`${index === 0 ? 'active' : ''}`}
							key={index}
						/>
					))}
				</ol>
				<div className='carousel-inner mb-2' role='listbox'>
					{carouselArray.map((eventArray, index) => (
						<div className={`carousel-item ${index === 0 ? 'active' : ''} row`} key={index}>
							{eventArray.map((event) => (
								<EventCard
									imagePath={event.imagePath}
									eventName={event.eventName}
									key={event.id}
									style={{ float: 'left' }}
								/>
							))}
						</div>
					))}
				</div>
				<a className='carousel-control-prev' href='#eventCarousel' role='button' data-slide='prev'>
					<span className='carousel-control-prev-icon' aria-hidden='true' />
					<span className='sr-only'>Previous</span>
				</a>
				<a className='carousel-control-next' href='#eventCarousel' role='button' data-slide='next'>
					<span className='carousel-control-next-icon' aria-hidden='true' />
					<span className='sr-only'>Next</span>
				</a>
			</div>

			<div className='mobile-carousel'>
				<ol className='carousel-indicators m-0'>
					{Event_List.map((event, index) => (
						<li
							data-target='#eventCarousel'
							data-slide-to={index}
							className={`${index === 0 ? 'active' : ''}`}
							key={event.id}
						/>
					))}
				</ol>
				<div className='carousel-inner mb-2 mobile-carousel' role='listbox'>
					{Event_List.map((event, index) => (
						<div className={`carousel-item ${index === 0 ? 'active' : ''} row`} key={index}>
							<EventCard imagePath={event.imagePath} eventName={event.eventName} key={event.id} />
						</div>
					))}
				</div>
				<a className='carousel-control-prev' href='#eventCarousel' role='button' data-slide='prev'>
					<span className='carousel-control-prev-icon' aria-hidden='true' />
					<span className='sr-only'>Previous</span>
				</a>
				<a className='carousel-control-next' href='#eventCarousel' role='button' data-slide='next'>
					<span className='carousel-control-next-icon' aria-hidden='true' />
					<span className='sr-only'>Next</span>
				</a>
			</div>
		</div>
	);
};

export default EventCarousel;
