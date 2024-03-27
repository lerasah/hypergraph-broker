const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('student', {
      firstName: {
        type: DataTypes.STRING,
        field: 'first_name',
        allowNull: false
      },
      familyName: {
        type: DataTypes.STRING,
        field: 'family_name',
        allowNull: false
      },
      dob: {
        type: DataTypes.DATE,
        field: 'dob',
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        field: 'email',
        allowNull: false,
        unique: true
      },
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('student');
  },
};