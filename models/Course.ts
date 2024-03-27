import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Result } from './Result'

type CourseAssociations = 'results'

export class Course extends Model<
  InferAttributes<Course, {omit: CourseAssociations}>,
  InferCreationAttributes<Course, {omit: CourseAssociations}>
> {
  declare name: string
  declare id: CreationOptional<number>
  
  // Course hasMany Result
  declare results?: NonAttribute<Result[]>
  declare getResults: HasManyGetAssociationsMixin<Result>
  declare setResults: HasManySetAssociationsMixin<Result, never>
  declare addResult: HasManyAddAssociationMixin<Result, never>
  declare addResults: HasManyAddAssociationsMixin<Result, never>
  declare createResult: HasManyCreateAssociationMixin<Result>
  declare removeResult: HasManyRemoveAssociationMixin<Result, never>
  declare removeResults: HasManyRemoveAssociationsMixin<Result, never>
  declare hasResult: HasManyHasAssociationMixin<Result, never>
  declare hasResults: HasManyHasAssociationsMixin<Result, never>
  declare countResults: HasManyCountAssociationsMixin
  
  declare static associations: {
    results: Association<Course, Result>
  }

  static initModel(sequelize: Sequelize): typeof Course {
    Course.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    }, {
      sequelize,
      tableName: 'course'
    })
    
    return Course
  }
}
