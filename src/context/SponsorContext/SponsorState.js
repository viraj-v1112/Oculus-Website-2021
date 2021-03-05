import React, { useReducer } from 'react';
import SponsorContext from './SponsorContext';
import SponsorReducer from './SponsorReducer';
import { db } from '../../config';

const SponsorState = (props) => {
	const initialState = {
		sponsors: [],
		loading: true
	};

	const [ state, dispatch ] = useReducer(SponsorReducer, initialState);

	const getSponsors = async () => {
		let spo = [];
		await db.collection('websponsors').get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				spo.push(doc.data());
			});
		});
		spo.sort((a, b) => {
			return b.order - a.order;
		});
		dispatch({
			type: 'SET_SPONSORS',
			payload: spo
		});
	};

	return (
		<SponsorContext.Provider
			value={{
				loading: state.loading,
				sponsors: state.sponsors,
				getSponsors
			}}
		>
			{props.children}
		</SponsorContext.Provider>
	);
};

export default SponsorState;
