// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case 'SET_SPONSORS':
      return {
        ...state,
        sponsors: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
};
