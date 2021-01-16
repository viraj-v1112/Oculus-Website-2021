// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        events: action.payload,
        loading: false,
      };

    default:
      return { ...state };
  }
};
