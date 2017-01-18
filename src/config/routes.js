import App from '../components/App';
import Game from '../routes/Game';

export default (store) => {
  return {
    childRoutes: [{
      path: '/',
      component: App,
      childRoutes: [
        Game,
      ],
    }],
  };
}
