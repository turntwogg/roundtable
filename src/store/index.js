import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { requestGames } from '../actions/games';

function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
    ),
  );

  // Load up the store w/ games by default
  store.dispatch(requestGames());

  return store;
}

const store = configureStore();

module.exports = store;
