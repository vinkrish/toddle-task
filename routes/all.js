const Router = require('koa-router')
const router = new Router({ prefix: '/' })

router.get('/', (ctx, next) => {
  ctx.body = 'Welcome to Toddle App!'
})

module.exports = router
