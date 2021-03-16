import React, { useEffect, useContext } from 'react';
import SponsorsLogo from '../assets/OurSponsors.png';
import SponsorContext from '../context/SponsorContext/SponsorContext';
import { animateScroll as scroll } from 'react-scroll';
import '../App.css';
import Loading from '../shared/Loading';
import VotesContext from '../context/VotesContext/VotesContext';

const Sponsor = () => {
  const { getSponsors, sponsors, loading } = useContext(SponsorContext);
  const { getVotes } = useContext(VotesContext);

  useEffect(() => {
    getSponsors();
    getVotes();
    scroll.scrollToTop();
    // eslint-disable-next-line
  }, []);

  if (sponsors.length === 0) {
    return <Loading />;
  }
  return (
    <div className='back-app' style={{ borderRadius: '0 1rem 0 0' }}>
      <div className='container-flex py-5 mx-5'>
        <div className='row py-0'>
          <img
            src={SponsorsLogo}
            alt='Our Sponsors'
            className='event-logo-big'
          />
        </div>
        <div>
          <div className='row justify-content-center my-5'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
              <a href={sponsors[0].link} target='_blank' rel='noreferrer'>
                <img
                  style={{ width: '100%' }}
                  src={sponsors[0].imageURL}
                  alt={sponsors[0].name}
                />
              </a>
              <h2 className='mb-4 text-center mt-4'>Co-Title Sponsor</h2>
            </div>
          </div>
          <div className='row'>
            {sponsors
              .filter((sponsor) => {
                if (
                  sponsor.imageURL !== '' &&
                  sponsor.title !== 'Co-Title Sponsor' &&
                  sponsor.order >= 0
                )
                  return sponsor;
              })
              .map((sponsor) => (
                <div className='col-lg-6 col-md-6 col-sm-12 col-12 align-bottom my-5 '>
                  <a href={sponsor.link} target='_blank' rel='noreferrer'>
                    <img
                      className='sponsor-image'
                      src={sponsor.imageURL}
                      alt={sponsor.name}
                    />
                  </a>
                  <h5 className='text-center mt-5'>{sponsor.title}</h5>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sponsor;
