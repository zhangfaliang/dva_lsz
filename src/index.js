/* eslint-disable no-underscore-dangle */
import dva from 'dva';
import { browserHistory } from 'dva/router';

// 第三方插件
// https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md 支持effect级别loading状态
import createLoading from 'dva-loading'
import { persistStore, autoRehydrate } from 'redux-persist';
import moment from 'moment'

// relative imports
import './index.css';
import persistConfig from './plugins/get-redux-persist-config'
import modelRegister from './models/model-register'

// 1. Initialize
const app = dva({
  history: browserHistory,
  extraEnhancers: [autoRehydrate()],
});

// 2. Plugins
app.use(createLoading()); // dva-loading
moment.locale('zh-cn');   // moment设置中文

// 3. Model
modelRegister(app)

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

// 6. Things to be done after app start
persistStore(app._store, persistConfig, () => {
  console.log('rehydration complete')
}); // 持久化store
