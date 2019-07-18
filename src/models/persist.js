export default {

  namespace: 'persist',

  state: {},

  effects: {
    *REHYDRATE({ payload: { sample } }, { call, put }) {  // eslint-disable-line
      const { cumulate } = sample
      yield put({
        type: 'sample/rehydrate',
        payload: {
          cumulate,
        },
      });
    },
  },

/*  reducers: {
    rehydrate(state, action) {
      return state
    },
  },*/

};
