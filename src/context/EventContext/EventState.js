import React, { useReducer } from 'react';
import EventContext from './EventContext';
import EventReducer from './EventReducer';

const EventState = (props) => {
  const initialState = {
    events: {},
    loading: true,
  };

  const [state, dispatch] = useReducer(EventReducer, initialState);

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        loading: state.loading,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
