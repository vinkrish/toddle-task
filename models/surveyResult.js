module.exports = (sequelize, DataTypes) => sequelize.define('surveyResult', {
  surveyResultId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'SURVEY_RESULT_ID'
  },
  surveyId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'survey',
      key: 'SURVEY_ID'
    },
    field: 'SURVEY_ID'
  },
  questionId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'survey_question',
      key: 'QUESTION_ID'
    },
    field: 'QUESTION_ID'
  },
  userId: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: 'users',
      key: 'USER_ID'
    },
    field: 'USER_ID'
  },
  answer: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    field: 'ANSWER'
  }
}, {
  tableName: 'survey_result'
})
