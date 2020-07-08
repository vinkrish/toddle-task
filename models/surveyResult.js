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
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'USER_NAME'
  },
  answer: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    field: 'ANSWER'
  },
  createDateTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'CREATE_DATE_TIME'
  }
}, {
  tableName: 'survey_result',
  timestamps: false
})
