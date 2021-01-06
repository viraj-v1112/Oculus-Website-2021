import React, { useEffect, useRef, useState } from 'react';
import ReactMorph from 'react-morph';
import { Event_List } from './EventDetails';
import AnimateCard from './AnimateCard';
import './EventCard.css';
import CustomModal from '../../shared/CustomModal';

const EventCard = ({ category }) => {
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

	const [ eventList, setEventList ] = useState(Event_List);
	const [ open, setOpen ] = useState(false);
	// const morphRef = useRef();

	useEffect(
		() => {
			if (category !== '') {
				const array = Event_List.filter((event) => event.category === category);
				setEventList(array);
			} else setEventList(Event_List);
		},
		[ category ]
	);

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
			{eventList.map((eventdet) => (
				<div
					key={eventdet.id}
					className={`col-lg-4 col-md-6 col-sm-12 col-12 mt-5 col-space-class ${getStatus().status &&
					!state[`${eventdet.id}`]
						? 'blur'
						: ''}`}
					style={{ paddingTop: '40px', paddingBottom: '40px' }}
					// onClick={(e) => {
					// 	if (e.target.tagName !== 'BUTTON' && getStatus().status) {
					// 		setState({ ...state, [getStatus().key]: false });
					// 		// morphRef.current.handleGo();
					// 	}
					// }}
				>
					<ReactMorph spring={{ stiffness: 170, damping: 26 }}>
						{({ from, go, hide, to }) => (
							<AnimateCard
								event={eventdet}
								key={eventdet.id}
								state={state}
								setState={setState}
								handleOpen={() => setOpen(true)}
								id={eventdet.id}
								from={from}
								go={(val) => go(val)}
								hide={hide}
								to={to}
								// ref={morphRef}
							/>
						)}
					</ReactMorph>
				</div>
			))}
			<CustomModal open={open} onClose={() => setOpen(false)} />
		</div>
	);
};

export default EventCard;
