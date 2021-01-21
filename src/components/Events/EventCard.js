import React, { Fragment } from 'react';
import { useState, useContext } from 'react';
import { GoVerified } from 'react-icons/go';
import AuthContext from '../../context/AuthContext/AuthContext';
import './EventCard.css';

const EventCard = ({ event, handleOpen }) => {
  const [active, setActive] = useState(false);
  const {
    description,
    category,
    eventName,
    imageURL,
    likes,
    prizes,
    teamSizeAndFees,
  } = event;
  const { user, userData, Update, SignIn } = useContext(AuthContext);

  const handleClick = async () => {
    if (user) {
      await Update(user, eventName);
    } else {
      await SignIn(handleOpen, eventName);
    }
  };

  const isShownInterest = () => {
    if (userData) {
      const { Events } = userData;
      const eventNames = Object.keys(Events);

      const val = eventNames.indexOf(eventName);

      if (val === -1) return false;
      else return true;
    }
  };

  return (
    <div
      className={`booking-card ${active ? 'ACTIVE' : ''}`}
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
      onClick={() => setActive(!active)}
    >
      <div className='book-container'>
        <div className='content'>
          <button
            className='btn'
            disabled={isShownInterest()}
            onClick={handleClick}
          >
            {isShownInterest() ? 'Request Recieved' : 'Interested'}
          </button>
        </div>
      </div>
      <div className='informations-container'>
        <h2 className='title'>
          {eventName}{' '}
          {isShownInterest() && (
            <GoVerified color='green' className='ml-1 pt-1' />
          )}
        </h2>

        <div
          className='d-flex justify-content-between'
          style={{ margin: '0 10px' }}
        >
          <span>{category}</span>
          <span>&#10084; {likes}</span>
        </div>

        <div className='more-information'>
          <div className='info-and-date-container'>
            <div className='box info'>
              <p>Prizes</p>
              <p style={{ fontSize: '0.85rem' }}>₹ {prizes}</p>
            </div>
            <div className='box date'>
              <p>Registration</p>
              <div style={{ fontSize: '0.85rem' }}>
                {teamSizeAndFees.map((arr, index) => {
                  return (
                    <div key={index}>
                      <span>{arr[0]} </span>
                      {arr[2] ? (
                        <Fragment>
                          <span>({arr[1]})</span> <span>: ₹ {arr[2]}</span>
                        </Fragment>
                      ) : (
                        <span>: ₹ {arr[1]}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <p className='disclaimer justify-para'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            eveniet perferendis culpa. Expedita architecto nesciunt, rem
            distinctioLorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem
            distinctio
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
