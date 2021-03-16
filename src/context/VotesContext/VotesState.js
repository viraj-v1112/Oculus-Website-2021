import React, { useReducer } from 'react';
import VotesContext from './VotesContext';
import VotesReducer from './VotesReducer';
import { database } from '../../config';

const VotesState = (props) => {
  const initialState = {
    votes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(VotesReducer, initialState);

  const getVotes = async () => {
    let vote = [
      { branch: 'COMPS', count: 0 },
      { branch: 'EXTC', count: 0 },
      { branch: 'MCA', count: 0 },
      { branch: 'IT', count: 0 },
      { branch: 'ETRX', count: 0 },
    ];
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
    await database
      .ref('votes')
      .child('War of Branches')
      .get()
      .then(function (snapshot) {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          snapshot.forEach((snap) => {
            const branch = snap.child('vote').val();
            const index = vote.findIndex(
              (element) => element.branch === branch
            );
            vote[index].count += 1;
          });
        } else {
          console.log('No data available');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
    dispatch({
      type: 'SET_VOTES',
      payload: vote,
    });
    dispatch({
      type: 'SET_LOADING',
      payload: false,
    });
  };

  return (
    <VotesContext.Provider
      value={{
        loading: state.loading,
        votes: state.votes,
        getVotes,
      }}
    >
      {props.children}
    </VotesContext.Provider>
  );
};

export default VotesState;
