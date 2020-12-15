import React from 'react';
import './EventCard.css';
import CustomCard from '../../shared/CustomCard';
import imgCause from '../../assets/LandingSections/CauseImage.png';
import TempCard from './TempCard';

const EventCard = () => {
	return (
		<div>
			{/* <CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>
						<CustomCard cardTitle='Codatron' cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius' imagePath={imgCause}/>		 */}

			<TempCard />
			{/* <TempCard /> */}
		</div>
	);
};

export default EventCard;
