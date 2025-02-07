const router = require('express').Router()

const employeeRoute = require("./employee.route")
const shiftRoute = require("./shift.route")

router.use("/employee",employeeRoute)
router.use("/shift",shiftRoute)

module.exports = router
