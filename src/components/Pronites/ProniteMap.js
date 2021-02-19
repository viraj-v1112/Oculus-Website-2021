import React, { Fragment } from 'react';
import Pronite from './Pronite';

const ProniteMap = ({ eventList }) => {
  return (
    <Fragment>
      {eventList
        .filter((event) => {
          if (event.show !== false && event.category === 'Pronites')
            return event;
        })
        .map((eventdet, index) => (
          <div key={index}>
            <Pronite key={index} event={eventdet} index={index} />
          </div>
        ))}
    </Fragment>
  );
};

export default ProniteMap;
