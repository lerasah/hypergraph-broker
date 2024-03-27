import { body } from 'express-validator';

class StudentValidator {
    checkAddStudent() {
        const tenYearsAgo = new Date();
        tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

        return [
            body('firstName')
                .exists()
                .notEmpty()
                .withMessage('The value should not be empty')
                .isLength({ max: 255 })
                .withMessage('Max length 255 characters')
                .isString()
                .withMessage('The value should be a string'),
            body('familyName')
                .exists()
                .notEmpty()
                .withMessage('The value should not be empty')
                .isLength({ max: 255 })
                .withMessage('Max length 255 characters')
                .isString()
                .withMessage('The value should be a string'),
            body('email')
                .exists()
                .notEmpty()
                .withMessage('The value should not be empty')
                .isLength({ max: 255 })
                .withMessage('Max length 255 characters')
                .isEmail()
                .withMessage('The value should be an email address'),
            body('dob')
                .exists()
                .notEmpty()
                .withMessage('The value should not be empty')
                .isISO8601()
                .withMessage('The value should be in yyyy-mm-dd format')
                .isBefore(tenYearsAgo.toISOString())
                .withMessage(`Student should be at least 10 years old`),
        ];
    }
}

export default new StudentValidator();