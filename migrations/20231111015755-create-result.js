const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('result', {
      score: {
        type: DataTypes.ENUM('A', 'B', 'C', 'D', 'E', 'F'),
        field: 'score',
        allowNull: false
      },
      studentId: {
        type: DataTypes.INTEGER,
        field: 'student_id',
        primaryKey: true,
        allowNull: false
      },
      courseId: {
        type: DataTypes.INTEGER,
        field: 'course_id',
        primaryKey: true,
        allowNull: false
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('result');
  },
};