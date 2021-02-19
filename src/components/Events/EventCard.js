import React, { Fragment, forwardRef, useImperativeHandle } from 'react';
import { useState, useContext } from 'react';
import { GoVerified } from 'react-icons/go';
import AuthContext from '../../context/AuthContext/AuthContext';
import './EventCard.css';

const EventCard = forwardRef(({ event, handleOpen }, ref) => {
	const [ active, setActive ] = useState(false);

<<<<<<< HEAD
  useImperativeHandle(ref, () => ({
    SET_ACTIVE() {
      setActive(false);
    },
  }));
  const {
    link,
    shortDescription,
    category,
    eventName,
    imageURL,
    prizes,
    teamSizeAndFees,
    date,
    sectionId,
  } = event;
  const { user, userData, Update, SignIn } = useContext(AuthContext);
=======
	useImperativeHandle(ref, () => ({
		SET_ACTIVE() {
			setActive(false);
		}
	}));
	const { description, category, eventName, imageURL, prizes, teamSizeAndFees, date } = event;
	const { user, userData, Update, SignIn } = useContext(AuthContext);
>>>>>>> 3f3c4617ca354e4c27899425e763774828b641ae

	const handleClick = async () => {
		if (user) {
			await Update(user, eventName, handleOpen);
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

<<<<<<< HEAD
  return (
    <section
      className={`booking-card ${active ? 'ACTIVE' : ''}`}
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
      onClick={() => setActive(!active)}
      id={sectionId}
    >
      <div className='book-container'>
        <div className='content'>
          {link ? (
            <a href={link} target='_blank' rel='noreferrer'>
              <button className='btn'>Register</button>
            </a>
          ) : (
            <button
              className='btn'
              disabled={isShownInterest()}
              onClick={handleClick}
            >
              {isShownInterest() ? 'Request Recieved' : 'Register'}
            </button>
          )}
        </div>
      </div>
      <div className='informations-container'>
        <h2 className='title'>
          {eventName}{' '}
          {isShownInterest() && (
            <GoVerified color='green' className='ml-1 pt-1' />
          )}
        </h2>
=======
	return (
		<div
			className={`booking-card ${active ? 'ACTIVE' : ''}`}
			style={{
				backgroundImage: `url(${imageURL})`
			}}
			onClick={() => setActive(!active)}
		>
			<div className='book-container'>
				<div className='content'>
					<button className='btn' disabled={isShownInterest()} onClick={handleClick}>
						{isShownInterest() ? 'Request Recieved' : 'Register'}
					</button>
				</div>
			</div>
			<div className='informations-container'>
				<h2 className='title'>
					{eventName} {isShownInterest() && <GoVerified color='green' className='ml-1 pt-1' />}
				</h2>
>>>>>>> 3f3c4617ca354e4c27899425e763774828b641ae

				<div className='d-flex justify-content-between' style={{ margin: '0 10px' }}>
					<span>{category}</span>

<<<<<<< HEAD
          <span>
            <i className='fa fa-calendar-o' aria-hidden='true' /> {date}
          </span>
        </div>

        <div className='more-information'>
          <div className='info-and-date-container'>
            <div className='box info'>
              <p>Prizes Worth</p>
              <p style={{ fontSize: '0.85rem' }}>₹ {prizes}</p>
            </div>
            <div className='box'>
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
          <p className='disclaimer justify-para'>{shortDescription}</p>
        </div>
      </div>
    </section>
  );
=======
					<span>
						<i className='fa fa-calendar-o' aria-hidden='true' /> {date}
					</span>
				</div>

				<div className='more-information'>
					<div className='info-and-date-container'>
						<div className='box info'>
							<p>Prizes</p>
							<p style={{ fontSize: '0.85rem' }}>₹ {prizes}</p>
						</div>
						<div className='box'>
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
					<p className='disclaimer justify-para'>{description}</p>
				</div>
			</div>
		</div>
	);
>>>>>>> 3f3c4617ca354e4c27899425e763774828b641ae
});

export default EventCard;
