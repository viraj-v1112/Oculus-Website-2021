import React from 'react';
import ThemeLogo from '../../assets/Theme/Oculus theme.png';
import ThemePic from '../../assets/Theme/RetroTheme.jpg';
import './Theme.css';

const Theme = () => {
  return (
    <div>
      <div className='back-app back-app1'>
        <div className='container laptop-cause'>
          <div className='row py-0'>
            <img
              src={ThemeLogo}
              alt='Oculus For A Cause Title'
              className='theme-logo'
              data-aos='zoom-in'
              data-aos-duration='1000'
            />
          </div>
          <div className='row py-3 px-0'>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12 align-self-center py-5'>
              <p
                className='justify-para'
                data-aos='fade-right'
                data-aos-duration='1000'
              >
                Films, photos, books, clothes, music... it's all so simple at
                face value, but it has the incredible power to make us nostalgic
                for earlier eras even if we never grew up in them. Oculus SPIT
                aspires to bring back that warm feeling from your childhood,
                that feeling when you hear songs from that era, when you look at
                the movies and remember the good old days while dealing with the
                present to bring you an amazing experience with Oculus in Retro
                style.
              </p>
            </div>
            <div
              className='col col-lg-6 col-md-6 col-sm-12 col-12 px-3 align-self-center '
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              <img
                src={ThemePic}
                alt='Oculus For a Cause'
                className='theme-image'
              />
            </div>
          </div>
        </div>
        <div className='mobile-cause container'>
          <div className='row px-0 py-3'>
            <img
              src={ThemeLogo}
              alt='Oculus For A Cause Title'
              className='theme-logo'
            />
            <img
              src={ThemePic}
              alt='Oculus For a Cause'
              style={{ width: '80%', display: 'block', margin: '0 auto' }}
            />
          </div>
          <div className='row px-5 align-self-center'>
            <p className='text justify-para'>
              Films, photos, books, clothes, music... it's all so simple at face
              value, but it has the incredible power to make us nostalgic for
              earlier eras even if we never grew up in them. Oculus SPIT aspires
              to bring back that warm feeling from your childhood, that feeling
              when you hear songs from that era, when you look at the movies and
              remember the good old days while dealing with the present to bring
              you an amazing experience with Oculus in Retro style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
