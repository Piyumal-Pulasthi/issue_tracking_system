const Joi = require('joi');

const imageValidationSchema = {
	uploadImage: Joi.object().keys({
        imagable_type: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        imagable_id: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        size: Joi.number().required(),
        path: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        name: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        extension: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        commentId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
	issueId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
	}),
        updateImage: Joi.object().keys({
        imagable_type: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        imagable_id: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        size: Joi.number().required(),
        path: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        name: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        extension: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        commentId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        issueId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        imageId: Joi.string().regex(/^[^<>=]*$/).trim().required(),
        }),
};

module.exports = imageValidationSchema;