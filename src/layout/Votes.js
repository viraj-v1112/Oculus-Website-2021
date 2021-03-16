import React, { useEffect, useContext } from 'react';
import VotesContext from '../context/VotesContext/VotesContext';
import Loading from '../shared/Loading';

const Votes = () => {
  const { getVotes, votes, loading } = useContext(VotesContext);
  useEffect(() => {
    getVotes();
  }, []);

  if (loading === true || votes.length === 0) {
    return <Loading />;
  }
  return (
    <div className='back-app'>
      <div
        className='container-flex py-5 mx-5'
        style={{ marginTop: '8rem', marginBottom: '8rem' }}
      >
        {votes.map((vote) => (
          <div className='row  justify-content-center '>
            <div className='col-3'>{vote.branch}</div>
            <div className='col-3'>{vote.count} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Votes;
