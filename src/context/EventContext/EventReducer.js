export default (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: false,
      };

    default:
      return { ...state };
  }
};
