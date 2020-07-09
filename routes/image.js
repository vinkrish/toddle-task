const Router = require('koa-router')
const router = new Router({ prefix: '/image' })
const sharp = require('sharp')
const multer = require('@koa/multer')
const upload = multer()

router.post('/', upload.single('big_img'), async (ctx, next) => {
  const resizedImage = await sharp(ctx.request.file.buffer).png().resize(50, 50).toBuffer()
  ctx.status = 200
  ctx.attachment('thumbnail.png')
  ctx.body = resizedImage
})

module.exports = router
