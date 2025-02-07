const router = require("express").Router()
const { registerValidator,loginValidator } = require("../validator/employee")
const validate = require("../middleware/validate")
const { register,login } = require("../controller/employee.controller")

router.post('/register',registerValidator,validate, register)
router.post('/login',loginValidator,validate,login)

module.exports = router