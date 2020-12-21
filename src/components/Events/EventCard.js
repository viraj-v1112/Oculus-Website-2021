import React, { useEffect, useState } from 'react';
import { Event_List } from './EventDetails';
import './EventCard.css';
import AnimateCard from './AnimateCard';
import Temp from './Temp';

function areEqual(prevState, nextState) {
	console.log(prevState, nextState);
	return true;
}

const EventCard = () => {
	const [ state, setState ] = useState({
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false,
		9: false
	});

	const getStatus = () => {
		var status = false;
		for (let key in state) {
			status = status || state[key];
		}
		return status;
	};
	return (
		<div className='row mt-4'>
			{Event_List.map((eventdet) => (
				<div
					key={eventdet.id}
					className={`col-lg-4 col-md-6 col-sm-12 col-12 mt-5 col-space-class ${getStatus() &&
					!state[`${eventdet.id}`]
						? 'blur'
						: ''}`}
					style={{ paddingTop: '40px', paddingBottom: '40px' }}
				>
					<Temp event={eventdet} key={eventdet.id} state={state} setState={setState} id={eventdet.id} />
				</div>
			))}
		</div>
	);
};

export default EventCard;
