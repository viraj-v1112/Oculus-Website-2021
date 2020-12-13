// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { useMorphKeys } from 'react-morph';
// import PlayerMini from './PlayerMini';
// import PlayerFull from './PlayerFull';
// import './TempCard1.css';
// import {
//   createEaseIn,
//   createEaseOut,
//   createEaseInOut,
//   createReversed,
//   easeInSin,
//   easeOutSin,
//   easeInOutSin,
//   easeIn,
//   easeOut,
//   easeInOut,
// } from 'react-morph/lib/easings';
// import { Fragment } from 'react';

// const TempCard = () => {
//   const morphs = useMorphKeys(
//     [
//       'container',
//       'title',
//       'cover',
//       'left',
//       'right',
//       'content-placeholder',
//       'sep',
//     ]
//     // {
//     //   // keepFrom: true,
//     //   spring: {
//     //     stiffness: 170,
//     //     damping: 26,
//     //     // restDisplacementThreshold: 0.0005,
//     //   },
//     //   easings: easeInOutSin(2),
//     // }
//   );

//   return (
//     <div className='container-Card'>
//       <Router>
//         <Route
//           exact
//           path='/events'
//           render={() => <PlayerMini morphs={morphs} />}
//         />
//         <Route
//           path='/event_desc'
//           render={() => <PlayerFull morphs={morphs} />}
//         />
//       </Router>
//     </div>
//   );
// };
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactMorph from 'react-morph';
import './TempCard1.css';
import { createExpoIn, easeIn } from '@popmotion/easing';
// import Simple from './Simple';

// const { createExpoIn, easeIn } = easing;

const strongerEase = createExpoIn(3);

// Create a new spring
class TempCard extends Component {
  state = { simple: true };
  faces = [
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

  render() {
    return (
      <ReactMorph spring={{ stiffness: 170, damping: 26 }}>
        {({
          state,
          fadeIn,
          fadeOut,
          from,
          go,
          hiddenProps,
          hide,
          progress,
          seek,
          to,
        }) => (
          <div className='container-card'>
            <a className='Card' {...hide()} onClick={() => go(1)}>
              <div>
                <h1 className='Card-title' {...from('title', { zIndex: 4 })}>
                  Zurich
                </h1>
              </div>
              <div
                {...from('cover', { zIndex: 2 })}
                className='Card-image'
                style={{
                  backgroundImage:
                    'url("https://www.insidesport.co/wp-content/uploads/2019/12/9-6.jpg")',
                }}
                alt='Zurich landscape'
              />

              <div className='Card-footer'>
                <span {...from('left', { zIndex: 4 })}>
                  <small className='c-white'>Grossmünster</small>
                </span>
                <span {...from('right', { zIndex: 4 })}>
                  <small className='c-white'>47.3769° N, 8.5417° E</small>
                </span>
              </div>
            </a>

            <div className='Card-content'>
              <div
                className='Card-content-placeholder'
                {...from('content-placeholder', {
                  zIndex: 1,
                  easing: strongerEase,
                })}
              />
              <div />
              <div className='p1'>
                <p className='separator t-left' {...from('sep', { zIndex: 3 })}>
                  Panorama Grossmünster limmat river
                </p>

                <ul className='users'>
                  {this.faces.map(({ src, username }) => (
                    <li className='users-item' key={`Card-${username}`}>
                      <img
                        className='users-image'
                        src={
                          src ||
                          'https://raw.githubusercontent.com/brunnolou/react-morph/master/examples/demo/public/brunnolou.jpg'
                        }
                        alt={username}
                        {...from('user-' + username, {
                          zIndex: 3,
                          getMargins: false,
                          easing: easeIn,
                        })}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='details' onClick={() => go(0)}>
              <div
                className='details-image'
                style={{
                  backgroundImage:
                    'url("https://www.insidesport.co/wp-content/uploads/2019/12/9-6.jpg")',
                }}
                role='picture'
                alt='Zurich landscape'
                {...to('cover')}
              />

              <div className='details-title'>
                <div className='details-toolbar Card-footer'>
                  <small {...to('left')}>Grossmünster</small>
                  <small {...to('right')}>47.3769° N, 8.5417° E</small>
                </div>

                <h1 className='Card-title' {...to('title')}>
                  Zurich
                </h1>
              </div>

              <div className='details-content'>
                <div
                  className='details-content-placeholder'
                  {...to('content-placeholder')}
                />
                <div className='center l-flex'>
                  <span {...to('sep')}> </span>
                </div>

                <ul>
                  {this.faces.map(({ src, username }, index) => (
                    <li className='users-item' key={`details-${username}`}>
                      <img
                        className='users-image users-image--lg'
                        src={
                          src ||
                          'https://raw.githubusercontent.com/brunnolou/react-morph/master/examples/demo/public/brunnolou.jpg'
                        }
                        alt={username}
                        {...to('user-' + username)}
                      />

                      <span {...fadeIn()}>{username}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </ReactMorph>
    );
  }
}

export default TempCard;
