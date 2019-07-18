import React from 'react';
import { connect } from 'dva';
import { I18nextProvider } from 'react-i18next';
import { get } from 'lodash';
import { closeModal, openModal } from '../../../models/actions/common'

import i18n from '../../../utils/i18n'; // initialized i18next instance
import MainLayout from './MainLayout';

class Container extends React.Component {
  render() {
    return (<I18nextProvider i18n={i18n}>
      <MainLayout {...this.props} />
    </I18nextProvider>)
  }
}

function mapStateToProps(state) {
  return {
    modal: get(state, 'common.modal'),
  };
}

export default connect(mapStateToProps, {
  closeModal,
  openModal,
})(Container);
