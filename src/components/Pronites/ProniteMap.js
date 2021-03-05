import React, { Fragment, useState } from 'react';
import CustomModal from '../../shared/CustomModal';

import Pronite from './Pronite';

const ProniteMap = ({ eventList }) => {
  const [open, setOpen] = useState(false);
  const [oevent, setOevent] = useState('');

  return (
    <Fragment>
      {eventList
        .filter((event) => {
          if (event.show !== false && event.category === 'Pronites')
            return event;
        })
        .map((eventdet, index) => (
          <div key={index}>
            <Pronite
              key={index}
              event={eventdet}
              index={index}
              handleOpen={() => {
                console.log('object1');
                setOpen(true);
                setOevent(eventdet.eventName);
              }}
            />
          </div>
        ))}
      <CustomModal open={open} onClose={() => setOpen(false)} oevent={oevent} />
    </Fragment>
  );
};

export default ProniteMap;
