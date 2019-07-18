import React, { PropTypes } from 'react';

import styles from './game-layout.less';

function GameLayout({
  children,
}) {
  return (<div className={styles.normal}>
    <h2>title of game layout</h2>
    {children}
  </div>)
}

GameLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GameLayout;
