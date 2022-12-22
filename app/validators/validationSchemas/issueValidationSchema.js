const Joi = require('joi');

const issueValidationSchema = {
	createIssue: Joi.object().keys({
        categoryId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        subcategoryId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        title: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        body: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        uuid: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        slug: Joi.string().regex(/^[^<>=]*$/).trim().required(),
	}),
        updateIssue: Joi.object().keys({
        issueId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        title: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        body: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        uuid: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        slug: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        }),
};

module.exports = issueValidationSchema;