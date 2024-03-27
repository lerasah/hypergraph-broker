import { body } from 'express-validator';

class ResultValidator {
    checkAddResult() {
        return [
            body('score')
                .exists()
                .withMessage('The value should not be empty')
                .isLength({ max: 1 })
                .withMessage('Max length 1 character')
                .isIn(['A', 'B', 'C', 'D', 'E', 'F'])
                .withMessage('The value should be one of A, B, C, D, E, F.'),
            body('studentId')
                .exists()
                .notEmpty()
                .withMessage('The value should not be empty')
                .isInt({ min: 1 })
                .withMessage('The value should be a positive integer'),
            body('courseId')
                .notEmpty()
                .withMessage('The value should not be empty')
                .isInt({ min: 1 })
                .withMessage('The value should be a positive integer')
        ];
    }
}

export default new ResultValidator();