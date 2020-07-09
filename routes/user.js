const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
var jwt = require('jsonwebtoken')
const models = require('../models')

const findUndefinedKey = (obj) => Object.keys(obj).find((e) => obj[e] === undefined)

router.post('/login', async (ctx, next) => {
  const data = {
    username: ctx.request.body.username,
    password: ctx.request.body.password
  }

  const mandatoryKey = findUndefinedKey(data)

  if (mandatoryKey) {
    ctx.status = 403
    ctx.body = { body: `${mandatoryKey} is missing!` }
    return
  }

  let user = await models.users.findOne({
    where: {
      username: data.username
    }
  })
  if (!user) {
    user = await models.users.create(data)
  }
  const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
    expiresIn: 86400 // expires in 24 hours
  })
  ctx.body = { token }
})

module.exports = router
