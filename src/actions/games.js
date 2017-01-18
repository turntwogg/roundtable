import fetch from 'isomorphic-fetch';

function fetchingGames() {
  return {
    type: 'FETCHING_GAMES',
  };
}

function postGames(games) {
  return {
    type: 'POST_GAMES',
    games,
  };
}

export function requestGames() {
  return dispatch => {
    dispatch(fetchingGames());

    return fetch('http://dev-roundtable-api.pantheonsite.io/api/node/game?_format=api_json')
      .then(res => res.json())
      .then(games => dispatch(postGames(games)));
  }
}
