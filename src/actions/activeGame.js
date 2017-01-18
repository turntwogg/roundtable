import fetch from 'isomorphic-fetch';

function fetchingActiveGame() {
  return {
    type: 'FETCHING_ACTIVE_GAME',
  };
}

function postActiveGame(game) {
  return {
    type: 'POST_ACTIVE_GAME',
    game,
  };
}

export function requestActiveGame(slug) {
  return dispatch => {
    dispatch(fetchingActiveGame());

    return fetch(`http://dev-roundtable-api.pantheonsite.io/api/node/game?_format=api_json&filter[field_game_slug][value]=${slug}`)
      .then(res => res.json())
      .then(game => dispatch(postActiveGame(game.data[0])));
  }
}
