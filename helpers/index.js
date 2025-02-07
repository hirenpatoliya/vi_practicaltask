const jwt = require("jsonwebtoken")

const createJwtToken = (payload) => {
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRY})
}

const verifyToken = (token) => jwt.verify(token,process.env.JWT_SECRET)



module.exports = {
    createJwtToken,
    verifyToken
}