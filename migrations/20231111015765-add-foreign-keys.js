const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addConstraint('result', {
      fields: ['student_id'],
      type: 'foreign key',
      name: 'result_student_id_fkey',
      references: {
        table: 'student',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'NO ACTION'
    })
    
    await queryInterface.addConstraint('result', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'result_course_id_fkey',
      references: {
        table: 'course',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'NO ACTION'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('result', 'result_student_id_fkey')
    await queryInterface.removeConstraint('result', 'result_course_id_fkey')
  }
};