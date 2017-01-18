const defaultState = {
  data: [],
  links: null,
  isFetching: false,
};

function gamesReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCHING_GAMES':
      return {
        ...defaultState,
        isFetching: true,
      };

    case 'POST_GAMES':
      return {
        ...state,
        ...action.games,
        isFetching: false,
      };

    default:
      return state;
  }
}

module.exports = gamesReducer;
