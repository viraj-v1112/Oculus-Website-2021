import React, { useReducer } from 'react';
import EventContext from './EventContext';
import EventReducer from './EventReducer';

const EventState = (props) => {
  const initialState = {
    events: {},
    loading: true,
  };

  const [state, dispatch] = useReducer(EventReducer, initialState);

  const setLoading = () => {
    console.log('loaded');
    dispatch({
      type: 'SET_LOADING',
    });
  };

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        loading: state.loading,
        setLoading,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
