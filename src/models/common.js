import React from 'react'

export default {

  namespace: 'common',

  state: {
    modal: {
      visible: false,
      style: {
        width: '90vw',
        maxHeight: '85vh',
        height: 'auto',
        overflowY: 'scroll',
      },
      transparent: true,
      maskClosable: true,
      title: '',
      content: <h2>模态框内容</h2>,
    },
    locale: 'zh-cn',
  },

  effects: {
  },

  reducers: {
    openModal(state) {
      return {
        ...state,
        modal: {
          ...state.modal,
          visible: true,
        },
      }
    },
    closeModal(state) {
      return {
        ...state,
        modal: {
          ...state.modal,
          visible: false,
        },
      }
    },
    changeLocale(state, { payload }) {
      return {
        ...state,
        localt: payload.locale,
      }
    },
  },
};
