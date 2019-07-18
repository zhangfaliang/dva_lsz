// import registerModel from '../../utils/register-model';
import GameLayout from '../../components/Layouts/game-layout'

export default (app, cached) => ({
  path: 'game',
  component: GameLayout,
  indexRoute: require('./game-portal/index.js')(app, cached),
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        // Remove imports!
        require('../sample/index.js')(app, cached),
      ])
    })
  },
});
