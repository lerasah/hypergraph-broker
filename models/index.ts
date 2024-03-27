import type { Sequelize, Model } from 'sequelize'
import { Student } from './Student'
import { Course } from './Course'
import { Result } from './Result'

export {
  Student,
  Course,
  Result
}

export function initModels(sequelize: Sequelize) {
  Student.initModel(sequelize)
  Course.initModel(sequelize)
  Result.initModel(sequelize)

  Student.hasMany(Result, {
    as: 'results',
    foreignKey: 'student_id'
  })
  Course.hasMany(Result, {
    as: 'results',
    foreignKey: 'course_id'
  })
  Result.hasOne(Student, {
    as: 'student',
    foreignKey: 'id'
  })
  Result.hasOne(Course, {
    as: 'course',
    foreignKey: 'id'
  })

  return {
    Student,
    Course,
    Result
  }
}
