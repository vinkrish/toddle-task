const Router = require('koa-router')
const router = new Router({ prefix: '/survey' })
const models = require('../models')
const checkToken = require('../util/checkToken')

const findUndefinedKey = (obj) => Object.keys(obj).find((e) => obj[e] === undefined)

router.use(checkToken)

router.post('/new', async (ctx, next) => {
  const data = {
    questions: ctx.request.body.questions
  }

  const mandatoryKey = findUndefinedKey(data)

  if (mandatoryKey) {
    ctx.status = 403
    ctx.body = { body: `${mandatoryKey} is missing!` }
    return
  }

  const survey = await models.survey.create({ description: ctx.request.body.description, userId: ctx.userId })

  const promises = data.questions.map(async question => {
    await models.surveyQuestion.create({ surveyId: survey.surveyId, question })
  })
  await Promise.all(promises)

  ctx.body = { survey }
})

router.post('/', async (ctx, next) => {
  const data = {
    survey: ctx.request.body.survey
  }

  const mandatoryKey = findUndefinedKey(data)

  if (mandatoryKey) {
    ctx.status = 403
    ctx.body = { body: `${mandatoryKey} is missing!` }
    return
  }

  const wrongAnswerValue = data.survey.filter(s => !['yes', 'no'].includes(s.answer))
  if (wrongAnswerValue.length > 0) {
    ctx.status = 403
    ctx.body = { body: 'Only yes or no is accepted for answers' }
    return
  }

  const promises = data.survey.map(async s => {
    await models.surveyResult.create({ surveyId: s.surveyId, questionId: s.questionId, userId: ctx.userId, answer: s.answer })
  })
  await Promise.all(promises)

  ctx.body = { data: 'saved survey result' }
})

router.get('/result/:surveyId', async (ctx, next) => {
  const survey = await models.survey.findOne({ where: { surveyId: ctx.params.surveyId } })
  const surveyResult = await models.surveyResult.findAll({ where: { surveyId: ctx.params.surveyId } })
  ctx.body = { survey, surveyResult }
})

router.get('/:surveyId', async (ctx, next) => {
  const survey = await models.survey.findOne({ where: { surveyId: ctx.params.surveyId } })
  const surveyQuestion = await models.surveyQuestion.findAll({ where: { surveyId: ctx.params.surveyId } })
  ctx.body = { survey, surveyQuestion }
})

module.exports = router
