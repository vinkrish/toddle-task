module.exports = (sequelize, DataTypes) => sequelize.define('survey', {
  surveyId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'SURVEY_ID'
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'USER_NAME'
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'DESCRIPTION'
  },
  createDateTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'CREATE_DATE_TIME'
  }
}, {
  tableName: 'survey',
  timestamps: false
})
