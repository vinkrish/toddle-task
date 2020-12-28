const Koa = require('koa')
const dotenv = require('dotenv')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const router = require('./routes')

if (process.env.NODE_ENV === 'development') {
  dotenv.config()
}
var models = require('./models')

const app = new Koa()
app.use(cors())
app.use(bodyParser())
app.use(router())

const init = async () => {
  // await models.sequelize.sync({force: true}) // force true will drop the table if it already exists
  await models.sequelize.sync()
  console.log('Tables have synced!')
}

init()

app.listen(process.env.PORT || 3000, function () {
  console.log('app started!')
})

module.exports = app
