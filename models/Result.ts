import {
  Association,
  CreationOptional,
  DataTypes,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Course } from './Course'
import type { Student } from './Student'

type ResultAssociations = 'student' | 'course'

export class Result extends Model<
  InferAttributes<Result, {omit: ResultAssociations}>,
  InferCreationAttributes<Result, {omit: ResultAssociations}>
> {
  declare score: 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
  declare studentId: CreationOptional<number>
  declare courseId: CreationOptional<number>
  
  // Result hasOne Student
  declare student?: NonAttribute<Student>
  declare getStudent: HasOneGetAssociationMixin<Student>
  declare setStudent: HasOneSetAssociationMixin<Student, number>
  declare createStudent: HasOneCreateAssociationMixin<Student>
  
  // Result hasOne Course
  declare course?: NonAttribute<Course>
  declare getCourse: HasOneGetAssociationMixin<Course>
  declare setCourse: HasOneSetAssociationMixin<Course, number>
  declare createCourse: HasOneCreateAssociationMixin<Course>
  
  declare static associations: {
    student: Association<Result, Student>,
    course: Association<Result, Course>
  }

  static initModel(sequelize: Sequelize): typeof Result {
    Result.init({
      score: {
        type: DataTypes.ENUM('A', 'B', 'C', 'D', 'E', 'F'),
        allowNull: false
      },
      studentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      courseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'result'
    })
    
    return Result
  }
}