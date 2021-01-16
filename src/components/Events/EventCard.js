import React, { Fragment } from 'react';
import { useState, useContext } from 'react';
import CustomButton from '../../shared/CustomButton';
import SignIn from '../../shared/onClick/SignIn';
import AuthContext from '../../context/AuthContext/AuthContext';
import Update from '../../shared/onClick/Update';
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
  const user = useContext(AuthContext);

  return (
    <div id='card'>
      <div id='profile'>
        <img src={imageURL} alt='User' />
        <h1>{eventName}</h1>
        <div className={active ? 'info active' : 'info'}>
          <div className='container'>
            <div className='row'>
              <div className='col-5 text-light front-text'>{category}</div>
              <div className='col-2'>
                <i
                  className='fa fa-info-circle text-light'
                  onClick={() => setActive(!active)}
                ></i>
                <i
                  className='fa fa-angle-down '
                  onClick={() => setActive(!active)}
                ></i>
              </div>
              <div className='col-5 text-light front-text align-middle'>
                <span className='text-danger'> &#10084;</span> {likes}
              </div>
            </div>
          </div>

          <div className='container info-para px-3'>
            <h4 className='text-center mobile-head-text'>{eventName}</h4>
            <p>
              Aelaan-E-Jung is an inter college dance competition where
              enthusiastic dancers from all over Mumbai compete for their glory.
              All the event coordinators work in harmony to satisfy the demands
              of the participants and synchronise effectively for better
              execution of event.
            </p>
            <div className='row mt-4 ml-0'>
              <div className='col-6'>
                <h5 className='back-text'>Prizes</h5>
                <p>₹ {prizes}</p>
              </div>
              <div className='col-6'>
                <h5 className='back-text'>Registration</h5>
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
            <CustomButton
              classname='mt-4 btn btn-block'
              buttonText='Interested'
              gradient={false}
              onClick={(e) => {
                // handleOpen();
                if (user) {
                  Update(user, eventName);
                } else {
                  SignIn(handleOpen, user, eventName);
                }
              }}
              // authRequired='true'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
