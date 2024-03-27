import { body, param, query } from 'express-validator';

class CourseValidator {
    checkAddCourse() {
        return [
            body('name')
                .exists()
                .notEmpty()
                .withMessage('The value should not be empty')
                .isLength({ max: 255 })
                .withMessage('Max length 255 characters')
                .isString()
                .withMessage('The value should be a string')
        ];
    }
}

export default new CourseValidator();