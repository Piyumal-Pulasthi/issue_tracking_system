const Joi = require('joi');

const categoryValidationSchema = {
	createCategory: Joi.object().keys({
		name: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		description: Joi.string().regex(/^[^<>=]*$/).trim().required(),
	}),
	updateCategory: Joi.object().keys({
		categoryId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		name: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		description: Joi.string().regex(/^[^<>=]*$/).trim().required(),
	}),
};

module.exports = categoryValidationSchema;