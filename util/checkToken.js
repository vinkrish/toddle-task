const jwt = require('jsonwebtoken')

async function checkToken (ctx, next) {
  try {
    const token = ctx.req.headers.authorization
    if (!token) {
      ctx.status = 403
      ctx.body = { message: 'Token not provided' }
      return
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    ctx.userId = decoded.userId
    await next()
  } catch (error) {
    console.log(error)
    ctx.status = 500
    ctx.body = { message: 'Our Team has been notified of your error!' }
  }
}

module.exports = checkToken
