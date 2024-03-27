import express from 'express';
import Middleware from '../middleware';
import CommonValidator from '../validators/common-validator';
import CannedResponseValidator from '../validators/canned-response-validator';
import CannedResponseController from '../controllers/canned-response-controller';

const router = express.Router();

router.post(
	'/add',
	CannedResponseValidator.checkAddCannedResponse(),
	Middleware.handleValidationError,
	CannedResponseController.add
);

router.get(
	'/',
	CannedResponseController.getAll
);

router.delete(
	'/:id',
	CommonValidator.checkIdParam(),
	Middleware.handleValidationError,
	CannedResponseController.delete
);

router.get(
	'/getCategoriesForDropdown',
	CannedResponseController.getCategoriesForDropdown
);

export default router;