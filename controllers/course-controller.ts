import { Request, Response } from "express";
import { Route } from "tsoa";

import { Course } from "../models/Course";
import { CreateCourseInputDto } from "../models/dto/create-course-input-dto";
import { CreatedResponseDto } from "../models/dto/common/created-response-dto";
import { ErrorResponseDto } from "../models/dto/common/error-response-dto";

@Route("courses")
class CourseController {

	//@Post("/add")
	async add(req: Request, res: Response<CreatedResponseDto<Course> | ErrorResponseDto>) {
		try {
			const record = await Course.create({ ...req.body });
			return res.status(201).json({ record, msg: "Record added" });
		} catch (e) {
			return res.status(500).json({ msg: "Failed to add record" });
		}
	}

	//@Get()
    async getAll(res: Response<Course[] | ErrorResponseDto>) {
		try {
			const records = await Course.findAll({ order:[['name','ASC']]});
			return res.json(records);
		} catch (e) {
			return res.status(500).json({ msg: "Failed to get courses" });
		}
	}

	//@Delete("/")
	async delete(req: Request, res: Response<null | ErrorResponseDto>) {
		try {
			const { id } = req.params;
			const record = await Course.findOne({ where: { id } });

			if (!record) {
				return res.status(404).json({ msg: "Cannot find course" });
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

export default new CourseController();