const combineRouters = require('koa-combine-routers')
const user = require('./user')
const survey = require('./survey')
const image = require('./image')
const all = require('./all')

const router = combineRouters(
  user,
  survey,
  image,
  all
)

module.exports = router
