const Koa = require('koa')
const dotenv = require('dotenv')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const router = require('./routes')

dotenv.config()
var models = require('./models')

const app = new Koa()
app.use(cors())
app.use(bodyParser())
app.use(router())

models.sequelize.sync().then(function () {
  app.listen(process.env.APP_PORT || 3000, function () {
    console.log('app started!')
  })
})
