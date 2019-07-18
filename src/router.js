import React from 'react';
import { Router } from 'dva/router';

import MainLayout from './components/Layouts/main-layout';

const cached = {};

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      component: MainLayout,
      indexRoute: { onEnter: (nextState, replace) => replace('/game') },
      // indexRoute: require('./routes/game-portal/index.js')(app, cached),
      getChildRoutes(location, cb) {
        require.ensure([], (require) => {
          cb(null, [
            // Remove imports!
            require('./routes/sample/index.js')(app, cached),
            require('./routes/game/index.js')(app, cached),
          ])
        })
      },
    },
    /* sync routes
    {
      path: '/login',
      name: 'LoginPage',
      component: TitledLayout,
      indexRoute: { component: LoginPage },
      childRoutes: [
        UsersRoute(app, cached),
      ],
    },
    */
  ]

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
