import express from 'express';
import Middleware from '../middleware';
import CommonValidator from '../validators/common-validator';
import StudentValidator from '../validators/student-validator';
import StudentController from '../controllers/student-controller';

const router = express.Router();

router.post(
	'/add',
	StudentValidator.checkAddStudent(),
	Middleware.handleValidationError,
	StudentController.add
);

router.get(
	'',
	StudentController.getAll
);

router.get(
	'/getAllForDropdown',
	StudentController.getAllForDropdown
);

router.delete(
	'/:id',
	CommonValidator.checkIdParam(),
	Middleware.handleValidationError,
	StudentController.delete
);

export default router;