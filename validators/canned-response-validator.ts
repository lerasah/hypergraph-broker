import { body, param, query } from 'express-validator';

// title
// categoryEnum
// templateContentRawHtml
// tags
// assetIds

class CannedResponseValidator {
    checkGetResponse() {
        return [
            query('category')
                .optional()
                .notEmpty()
                .withMessage('The value should not be empty')
                .isIn(['DriversLicenseRenewal', 'HealthCardRenewal', 'OSAPAssistance', 'OutdoorCardAssistance'])
                .withMessage('The value should be one of DriversLicenseRenewal, HealthCardRenewal, OSAPAssistance, OutdoorCardAssistance.'),
        ];
    }

    checkAddCannedResponse() {
        return [
            body('title')
                .exists()
                .notEmpty()
                .withMessage('The value should not be empty')
                .isLength({ max: 255 })
                .withMessage('Max length 255 characters')
                .isString()
                .withMessage('The value should be a string'),
            body('categoryEnum')
                .exists()
                .withMessage('The value should not be empty')
                .isIn(['DriversLicenseRenewal', 'HealthCardRenewal', 'OSAPAssistance', 'OutdoorCardAssistance'])
                .withMessage('The value should be one of DriversLicenseRenewal, HealthCardRenewal, OSAPAssistance, OutdoorCardAssistance.'),
            body('templateContentRawHtml')
                .exists()
                .notEmpty()
                .withMessage('The value should not be empty'),
            body('tags')
                .isArray()
                .withMessage('The value should be an array'),
            body('tags.*')
                .isString()
                .withMessage('The value should be a string array'),
            body('assetIds')
                .isArray()
                .withMessage('The value should be a string array'),
            body('assetIds.*')
                .isString()
                .withMessage('The value should be a string array'),
        ];
    }
}

export default new CannedResponseValidator();
