import * as React from 'react';
import { Link } from 'react-router-dom';
import './TempCard1.css';
import image1 from '../../assets/EventsLogo/IPL.png';

const PlayerFull = ({ morphs, ...props }) => {
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
    <Link to='/events' {...props} className='no-underline'>
      <div className='details' {...morphs.container}>
        <div
          {...morphs.cover}
          className='details-image'
          role='picture'
          alt='Zurich landscape'
          style={{
            backgroundImage:
              'url("https://www.insidesport.co/wp-content/uploads/2019/12/9-6.jpg")',
          }}
        />

        <div className='details-title'>
          {/* <div className='details-toolbar Card-footer'>
            <small {...morphs.left}>Grossmünster</small>
            <small {...morphs.right}>47.3769° N, 8.5417° E</small>
          </div> */}

          <h1 className='Card-title' {...morphs.to}>
            IPL Auction
          </h1>
        </div>

        <div className='details-content'>
          <div
            className='details-content-placeholder'
            {...morphs['content-placeholder']}
          />
          <div className='center l-flex'>
            <span {...morphs.sep}>Hello</span>
            <ul>
              {faces.map(({ src, username }, index) => (
                <li className='users-item' key={`details-${username}`}>
                  <img
                    className='users-image users-image--lg'
                    src={
                      src ||
                      'https://raw.githubusercontent.com/brunnolou/react-morph/master/examples/demo/public/brunnolou.jpg'
                    }
                    alt={username}
                  />

                  <span>{username}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlayerFull;
