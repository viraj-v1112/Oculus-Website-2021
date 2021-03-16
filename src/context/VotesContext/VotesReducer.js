// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case 'SET_VOTES':
      return {
        votes: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return { ...state };
  }
};
