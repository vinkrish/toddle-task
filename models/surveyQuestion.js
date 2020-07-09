module.exports = (sequelize, DataTypes) => sequelize.define('surveyQuestion', {
  questionId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'QUESTION_ID'
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
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'QUESTION'
  }
}, {
  tableName: 'survey_question'
})
