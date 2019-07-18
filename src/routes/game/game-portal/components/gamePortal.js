import React from 'react';
import { Helmet } from 'react-helmet';
import { Icon, Grid } from 'antd-mobile';
import styles from './gamePortal.less';

const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'koubei-o', 'koubei', 'loading',
];
/* eslint global-require: 0 */

const Demo = ({
  cumulate,
}) => {
  const data = icons.map(item => ({
    icon: (<Icon type={item} />),
    text: item,
  }));
  return (
    <div className={styles.normal}>
      <Helmet title="游戏中心" />
      <img src="https://ossweb-img.qq.com/upload/webplat/info/yxzj/20170621/1498036625180683.jpg" alt="" className={styles.img} />
      <p>计数器: {cumulate}</p>
      <Grid data={data} columnNum={3} hasLine={false} />
    </div>
  );
};

export default Demo;

/*
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);*/
