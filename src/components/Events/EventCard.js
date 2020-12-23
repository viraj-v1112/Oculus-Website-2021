import React, { useState } from 'react';
import ReactMorph from 'react-morph';
import { Event_List } from './EventDetails';
import AnimateCard from './AnimateCard';
import './EventCard.css';

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
		for (var key in state) {
			if (state[key]) {
				status = true;
				return { status, key };
			}
		}
		return { status: status, key: key };
	};

	return (
		<div className='row mt-4'>
			{Event_List.map((eventdet) => (
				<ReactMorph spring={{ stiffness: 170, damping: 26 }}>
					{({ from, go, hide, to }) => (
						<div
							key={eventdet.id}
							className={`col-lg-4 col-md-6 col-sm-12 col-12 mt-5 col-space-class ${getStatus().status &&
							!state[`${eventdet.id}`]
								? 'blur'
								: ''}`}
							style={{ paddingTop: '40px', paddingBottom: '40px' }}
							onClick={() => {
								if (getStatus().status) {
									setState({ ...state, [getStatus().key]: false });
								}
							}}
							on
						>
							<AnimateCard
								event={eventdet}
								key={eventdet.id}
								state={state}
								setState={setState}
								id={eventdet.id}
								from={from}
								go={(val) => go(val)}
								hide={hide}
								to={to}
							/>
						</div>
					)}
				</ReactMorph>
			))}
		</div>
	);
};

export default EventCard;
