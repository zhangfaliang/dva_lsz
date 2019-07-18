/* eslint-disable no-unused-vars */
// 非异步加载的models
// import gamePortalModel from '../routes/game-portal/models'
import persistModel from './persist'
import commonModel from './common'

export default function (app) {
  app.model(persistModel)
  app.model(commonModel)
}
