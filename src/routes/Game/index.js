import store from '../../store/';
import { requestActiveGame } from '../../actions/activeGame';

module.exports = {
  path: 'game/:slug',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./components/Game.js'));
    });
  },

  onEnter(nextState) {
    store.dispatch(requestActiveGame(nextState.params.slug));
  },
}
