const jwt = require("jsonwebtoken")
const EmployeeModel = require("../model/employee")
const {verifyToken } = require("../helpers/index")

const isAuthenticate =  async(req,res,next) => {
    try{
    const token = req.header("Authorization")?.replace('Bearer ','')

    if(!token) {
        return res.status(401).json({message: 'Authentication required'})
    }

    const decoded = verifyToken(token)
    
    const employee = await EmployeeModel.findById(decoded?.id)
    if(!employee) {
        return res.status(404).json({message:"Employee not found"})
    }
    req.employee = employee
    next()
} catch(error){
    return res.status(401).json({message: 'Invalid or expired token'})
}
}

const isAdmin = async(req,res,next) => {
    try {
            const admin = req?.employee?.role === "admin"

            if(!admin) return res.status(403).json({message:"Permission Denied: only admin can access"})  
            next()
            
        }catch(error){
        return res.status(500).json({message:"Something went wrong"})
    }
}

module.exports = {
    isAuthenticate,
    isAdmin
}