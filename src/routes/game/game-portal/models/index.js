// import * as usersService from '../../../services/users';

export default {
  namespace: 'gamePortal',
  state: {
    cumulate: 1,
  },
  reducers: {
    add(state, action) {
      return { ...state, cumulate: state.cumulate + action.payload.add };
    },
    rehydrate(state, { payload: { cumulate } }) {
      return { ...state, cumulate }
    },
  },
  effects: {
    /* fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    }, */
  },
  subscriptions: {
/*    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', () => {
        dispatch({
          type: 'add',
          payload: {
            add: 1,
          },
        })
      });*/
  /*  setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },*/
  },
};
