const Joi = require('joi');

const subcategoryValidationSchema = {
	createSubcategories: Joi.object().keys({
		categoryId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		name: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		description: Joi.string().regex(/^[^<>=]*$/).trim().required(),
	}),
	updateSubcategories: Joi.object().keys({
		subcategoryId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		categoryId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		name: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		description: Joi.string().regex(/^[^<>=]*$/).trim().required(),
	}),
};

module.exports = subcategoryValidationSchema;