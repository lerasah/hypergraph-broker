import express from 'express';
import Middleware from '../middleware';
import ResultValidator from '../validators/result-validator';
import ResultController from '../controllers/result-controller';

const router = express.Router();

router.post(
	'/add',
	ResultValidator.checkAddResult(),
	Middleware.handleValidationError,
	ResultController.add
);

router.get(
	'',
	ResultController.getAll
);

export default router;