import { body, param, query } from 'express-validator';

class CommonValidator {

    checkIdParam() {
        return [
            param('id')
                .notEmpty()
                .withMessage('The value should not be empty')
                .isInt({ min: 1 })
                .withMessage('The value should be a positive integer')
        ];
    }
}

export default new CommonValidator();