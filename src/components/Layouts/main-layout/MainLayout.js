import React, { PropTypes } from 'react';
import { Helmet } from 'react-helmet';
import { translate } from 'react-i18next';
import { Modal } from 'antd-mobile';

import styles from './MainLayout.less';

function MainLayout({
  children,
  modal,
  // actions
  closeModal,
  t,
}) {
  return (<div className={styles.normal}>
    <Helmet
      titleTemplate={`%s | ${t('mainLayout.titlePrefix')}`}
      title={t('mainLayout.title')}
    />
    <Modal
      {...modal}
      onClose={closeModal}
    >
      {modal.content}
    </Modal>
    {children}
  </div>)
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  modal: PropTypes.shape({
    visible: PropTypes.bool,
    transparent: PropTypes.bool,
    maskClosable: PropTypes.bool,
    closable: PropTypes.bool,
    style: PropTypes.object,
    platform: PropTypes.string,
    onClose: PropTypes.func,
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
  }),
  closeModal: PropTypes.func,
  t: PropTypes.func,
};

export default translate()(MainLayout);
