const {body} = require("express-validator")


const assignShiftValidator = [
    body('employeeId').trim().isMongoId(),
    body('shiftId').trim().isMongoId()
]


const switchShiftValidator = [
    body('shiftId').trim().isMongoId()
]


module.exports = {
    assignShiftValidator,
    switchShiftValidator
}