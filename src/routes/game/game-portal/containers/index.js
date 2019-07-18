import { connect } from 'dva';
import { get } from 'lodash';

import GamePortal from '../components/gamePortal';
// import { makeMultiedCounter } from '../models/selector'

function mapStateToProps(state) {
  return {
    cumulate: get(state, 'gamePortal.cumulate'),
    loadingGamePortal: get(state, 'loading.models.gamePortal'),
  };
}

export default connect(mapStateToProps)(GamePortal);
