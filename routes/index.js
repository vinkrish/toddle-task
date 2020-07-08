const combineRouters = require('koa-combine-routers')
const user = require('./user')
const survey = require('./survey')
const image = require('./image')

const router = combineRouters(
  user,
  survey,
  image
)

module.exports = router
