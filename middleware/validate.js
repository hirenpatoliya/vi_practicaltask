const { validationResult } = require("express-validator")

module.exports = (req,res,next) => {
    try {
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({ message: error.array()})
        }
        next()
    } catch (error) {
        return res.status(500).json({message: "Something went wrong"})
    }
}