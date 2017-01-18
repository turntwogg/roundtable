const defaultState = {
  attributes: {},
  id: null,
  relationships: null,
  links: null,
  isFetching: false,
};

function activeGameReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCHING_ACTIVE_GAME':
      return {
        ...defaultState,
        isFetching: true,
      };

    case 'POST_ACTIVE_GAME':
      return {
        ...state,
        ...action.game,
        isFetching: false,
      };

    default:
      return state;
  }
}

module.exports = activeGameReducer;
