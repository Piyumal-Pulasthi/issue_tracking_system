const Joi = require('joi');

const commentValidationSchema = {
	createComment: Joi.object().keys({
		issueId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		body: Joi.string().regex(/^[^<>=]*$/).trim().required(),
	}),
	updateComment: Joi.object().keys({
		commentId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		issueId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
		body: Joi.string().regex(/^[^<>=]*$/).trim().required(),
	}),
};

module.exports = commentValidationSchema;