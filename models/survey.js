module.exports = (sequelize, DataTypes) => sequelize.define('survey', {
  surveyId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'SURVEY_ID'
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
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'DESCRIPTION'
  }
}, {
  tableName: 'survey'
})
