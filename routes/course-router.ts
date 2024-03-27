import express from 'express';
import Middleware from '../middleware';
import CommonValidator from '../validators/common-validator';
import CourseValidator from '../validators/course-validator';
import CourseController from '../controllers/course-controller';

const router = express.Router();

router.post(
	'/add',
	CourseValidator.checkAddCourse(),
	Middleware.handleValidationError,
	CourseController.add
);

router.get(
	'',
	CourseController.getAll
);

router.delete(
	'/:id',
	CommonValidator.checkIdParam(),
	Middleware.handleValidationError,
	CourseController.delete
);

export default router;