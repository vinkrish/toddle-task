module.exports = (sequelize, DataTypes) => sequelize.define('users', {
  userId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'USER_ID'
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'USER_NAME'
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    field: 'EMAIL'
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'PASSWORD'
  }
}, {
  tableName: 'users',
  timestamps: false
})
