const {body} = require("express-validator")

const registerValidator = [
    body('name').trim().notEmpty(),
    body('email').trim().isEmail(),
    body('password').trim().notEmpty()
]

const loginValidator = [
    body('email').trim().isEmail(),
    body('password').trim().notEmpty()
]

module.exports = {
    registerValidator,
    loginValidator
}