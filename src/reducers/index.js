import { combineReducers } from 'redux';
import games from './games';
import activeGame from './activeGame';

const rootReducer = combineReducers({
  games,
  activeGame,
});

module.exports = rootReducer;
