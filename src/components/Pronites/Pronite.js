import React, { Fragment } from 'react';
import './Pronite.css';

const Pronite = ({ event, index }) => {
  const {
    eventName,
    date,
    webImageURL,
    description,
    link,
    artistImage,
  } = event;
  return (
    <Fragment>
      <div className='laptop-pronite'>
        <div className='pronite'>
          <div className='card-pro'>
            <div
              className='card__slide'
              style={{
                backgroundImage: `url(${webImageURL})`,
                backgroundSize: 'cover',
              }}
            >
              <img
                className='image'
                src={artistImage}
                style={{ backgroundImage: `url(${artistImage})` }}
                alt={eventName}
              ></img>
              <span className='number'>{index + 1}</span>
              <span className='Date'>
                {date}
                <span className='Date__time'></span>
              </span>
            </div>

            <div className='Content text-right'>
              <div className='Content__slide'>
                <h2 className='title'>
                  <span className='title__line'>
                    <span className='title__inner'>{eventName}</span>
                  </span>
                </h2>
                <p className='desc-1'>{description}</p>
                <div className='button-wrap'>
                  <a
                    className='button'
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Learn More<span className='button__hover'></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mobile-pronite'>
        <div className='pronite'>
          <div className='card-pro'>
            <div
              className='card__slide'
              style={{
                backgroundImage: `url(${webImageURL})`,
                backgroundSize: 'cover',
              }}
            >
              <img
                className='image'
                src={artistImage}
                style={{ backgroundImage: `url(${artistImage})` }}
                alt={eventName}
              ></img>
              <span className='number'>{index + 1}</span>
              <span className='Date'>
                {date}
                <span className='Date__time'></span>
              </span>
            </div>

            <div className='Content text-center'>
              <div className='Content__slide'>
                <h2 className='title'>
                  <span className='title__line'>
                    <span className='title__inner'>
                      {eventName.split(' ')[0]}{' '}
                    </span>
                  </span>
                  <span className='title__line'>
                    <span className='title__inner'>
                      {eventName.split(' ')[1]}
                    </span>
                  </span>
                </h2>
                <p className='desc-1'>{description}</p>
                <div className='button-wrap'>
                  <a
                    className='button'
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Learn More<span className='button__hover'></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pronite;
