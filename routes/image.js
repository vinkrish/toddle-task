const Router = require('koa-router')
const router = new Router({ prefix: '/image' })

router.post('/', (ctx, next) => {
  ctx.body = 'Hello Toddle!'
})

module.exports = router
