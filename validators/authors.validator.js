const Joi = require('joi')

const AuthorAddSchema = Joi.object({
    firstname: Joi.string()
        .required()
        .max(255)
        .trim()
        .required(),

    lastname: Joi.string()
        .max(255)
        .trim(),
    dob: Joi.date()
        .greater('1-1-1900')
        .less('1-1-2022')
        .required(),
    country: Joi.string()
        .optional(),
    books: Joi.array()
        .items(Joi.string())
        .optional(),
    createdAt: Joi.date()
        .default(Date.now),

    lastUpdateAt: Joi.date()
        .default(Date.now),

})


const AuthorUpdateSchema = Joi.object({
    firstname: Joi.string()
        .max(255)
        .trim(),
    lastname: Joi.string()
        .max(255)
        .trim(),
    dob: Joi.date()
        .greater('1-1-1900')
        .less('1-1-2022'),
    country: Joi.string(),
    books: Joi.array()
        .items(Joi.string())
        .optional()

})


async function AddAuthorValidationMw(req, res, next) {
    const authorPayload = req.body

    try {
        await AuthorAddSchema.validateAsync(authorPayload)
        next()
    } catch (error) {
        next({
            message: error.details[0].message,
            status: 400
        })
    }
}

async function UpdateAuthorValidationMw(req, res, next) {
    const authorPayload = req.body

    try {
        await AuthorUpdateSchema.validateAsync(authorPayload)
        next()
    } catch (error) {
        next({
            message: error.details[0].message,
            status: 400
        })
    }
}


module.exports = {
    UpdateAuthorValidationMw,
    AddAuthorValidationMw

}