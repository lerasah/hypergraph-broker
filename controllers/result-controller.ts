import { Request, Response } from "express";
import { Route } from "tsoa";

import { Result } from "../models/Result";
import { Course, Student } from "../models";
import { Sequelize } from "sequelize";

@Route("results")
class ResultController {

	async add(req: Request, res: Response) {
		try {
			const record = await Result.create({ ...req.body });
			return res.status(201).json({ record, msg: "Record added" });
		} catch (e) {
			return res.status(500).json({ msg: "Failed to add record" });
		}
	}

	/**
	 * SELECT `Result`.`student_id` AS `studentId`, `Result`.`score`, `student`.`id` AS `student.id`, `student`.`first_name` AS `student.firstName`, `student`.`family_name` AS `student.familyName`, `course`.`id` AS `course.id`, `course`.`name` AS `course.name` FROM `result` AS `Result` LEFT OUTER JOIN `student` AS `student` ON `Result`.`student_id` = `student`.`id` LEFT OUTER JOIN `course` AS `course` ON `Result`.`student_id` = `course`.`id`
	 * @param req 
	 * @param res 
	 * @returns 
	 */
	async getAll(req: Request, res: Response) {
		try {
			const records = await Result
				.findAll({
					include: [
						{
							model: Student,
							as: 'student',
							attributes: [[Sequelize.literal('TRIM(CONCAT(`first_name`, " ", `family_name`))'), 'fullName']],
							order: [['firstName', 'ASC'], ['familyName', 'ASC']]
						},
						{
							model: Course,
							as: 'course',
							attributes: {
								exclude: ['id']
							},
							order: [['name', 'ASC']]
						},
					],
					attributes: ['score']
				});
			return res.json(records);
		} catch (e) {
			console.error(e)
			return res.status(500).json({ msg: "Failed to get results" });
		}
	}
}

export default new ResultController();