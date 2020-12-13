import * as React from 'react';
import { Link } from 'react-router-dom';
import './TempCard1.css';
import image1 from '../../assets/EventsLogo/IPL.png';

const PlayerMini = ({ morphs, ...props }) => {
  const faces = [
    {
      username: 'brunnolou',
      src: 'https://avatars1.githubusercontent.com/u/2729225?s=460&v=4',
    },
    {
      username: 'lucalanca',
      src: 'https://avatars3.githubusercontent.com/u/389459?s=460&v=4',
    },
    {
      username: 'florianginetta',
      src: 'https://avatars3.githubusercontent.com/u/30113109?s=460&v=4',
    },
    {
      username: 'lejoe',
      src: 'https://avatars3.githubusercontent.com/u/1759?s=460&v=4',
    },
  ];
  return (
    <Link to='/event_desc' className='no-underline'>
      <div className='Card' {...props} {...morphs.container}>
        <div>
          <h1 className='Card-title' {...morphs.to}>
            IPL Auction
          </h1>
        </div>
        <div
          {...morphs.cover}
          className='Card-image'
          style={{
            backgroundImage:
              'url("https://www.insidesport.co/wp-content/uploads/2019/12/9-6.jpg")',
          }}
          alt='Zurich landscape'
        />
      </div>

      <div className='Card-content'>
        <div
          className='Card-content-placeholder'
          {...morphs['content-placeholder']}
        />
        <div />
        <div className='p1'>
          <p className='separator t-left' {...morphs.sep}>
            Event Details
          </p>
          <ul className='users'>
            {faces.map(({ src, username }) => (
              <li className='users-item' key={`card-${username}`}>
                <img
                  className='users-image'
                  src={
                    src ||
                    'https://raw.githubusercontent.com/brunnolou/react-morph/master/examples/demo/public/brunnolou.jpg'
                  }
                  alt={username}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default PlayerMini;
