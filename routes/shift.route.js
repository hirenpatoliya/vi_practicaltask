const router = require("express").Router()
const {assignShiftValidator,switchShiftValidator} = require("../validator/shift")

const validate = require("../middleware/validate")
const { isAuthenticate, isAdmin } = require("../middleware/auth")
const {assignShift, switchShift, addShift } = require("../controller/shift.controller")



router.post("/assign",assignShiftValidator,validate, isAuthenticate, isAdmin, assignShift)
router.post("/switch",switchShiftValidator,validate,isAuthenticate, switchShift)
router.post("/add",addShift);

module.exports = router;