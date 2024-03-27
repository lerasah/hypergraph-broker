import { Request, Response } from "express";
import { Route } from "tsoa";

import { Student } from "../models/Student";
import { Sequelize } from 'sequelize'

@Route("students")
class StudentController {

	async add(req: Request, res: Response) {
		try {
			const record = await Student.create({ ...req.body });
			return res.status(201).json({ record, msg: "Record added" });
		} catch (e) {
			return res.status(500).json({ msg: "Failed to add record" });
		}
	}

	async getAll(req: Request, res: Response) {
		try {
			const records = await Student.findAll({ order: [['first_name', 'ASC'], ['family_name', 'ASC']] });
			return res.json(records);
		} catch (e) {
			return res.status(500).json({ msg: "Failed to get students" });
		}
	}

	async getAllForDropdown(req: Request, res: Response) {
		try {
			const records = await Student
				.findAll({
					order: [['firstName', 'ASC'], ['familyName', 'ASC']],
					attributes: ['id', [Sequelize.literal('TRIM(CONCAT(`first_name`, " ", `family_name`))'), 'fullName']]
				});
			return res.json(records);
		} catch (e) {
			console.error(e)
			return res.status(500).json({ msg: "Failed to get students" });
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const record = await Student.findOne({ where: { id } });

			if (!record) {
				return res.status(404).json({ msg: "Cannot find student" });
			}

			await record.destroy();
			return res.status(204).end();
		} catch (e) {
			return res
				.status(500)
				.json({
					msg: "Failed to delete"
				});
		}
	}
}

export default new StudentController();