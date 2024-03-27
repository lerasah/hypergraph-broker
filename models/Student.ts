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

type StudentAssociations = 'results'

export class Student extends Model<
  InferAttributes<Student, {omit: StudentAssociations}>,
  InferCreationAttributes<Student, {omit: StudentAssociations}>
> {
  declare firstName: string
  declare familyName: string
  declare dob: Date
  declare email: string
  declare id: CreationOptional<number>
  
  // Student hasMany Result
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
    results: Association<Student, Result>
  }

  static initModel(sequelize: Sequelize): typeof Student {
    Student.init({
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      familyName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false
      },
      email: {
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
      tableName: 'student'
    })
    
    return Student
  }
}
