import React, { useReducer } from 'react';
import EventContext from './EventContext';
import EventReducer from './EventReducer';
import { db } from '../../config';

const EventState = (props) => {
  const initialState = {
    events: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(EventReducer, initialState);

  const getEvents = async () => {
    const eve = [];
    dispatch({ type: 'SET_LOADING' });
    await db
      .collection('Events')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          var event = doc.data();
          var teamsize = [];
          event.teamSizeAndFees.forEach((arr) => {
            teamsize.push(arr.split(','));
          });
          event.teamSizeAndFees = teamsize;
          eve.push(event);
        });
      });
    dispatch({
      type: 'SET_EVENTS',
      payload: eve,
    });
  };

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        loading: state.loading,
        getEvents,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
