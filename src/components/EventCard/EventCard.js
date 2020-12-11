import React from 'react';
import './EventCard.css';
import CustomCard from '../../shared/CustomCard';
import imgCause from '../../assets/LandingSections/CauseImage.png'

const EventCard = () => {
	return (
		<div className='back-app2'>
			<div className='container'>
				<div className='row py-5 px-0 justify-content-center'>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>		
				</div>
			</div>
		</div>
	);
};

export default EventCard;