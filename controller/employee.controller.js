const controller = {}
const EmployeeModel = require("../model/employee")
const {createJwtToken} = require("../helpers/index")
const bcrypt = require("bcrypt")

controller.register = async(req,res) =>{
    try {
        const { name, email, password }= req?.body

        const isRegister = await EmployeeModel.findOne({email}).lean()
        if(isRegister) return res.status(409).json({message:`Employee already register with this email:${email}`})

        const hashPassword = await bcrypt.hash(password,10)

        await EmployeeModel.create({name,email,password: hashPassword})
        return res.status(201).json({message:'Employee register successfully'})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"})
    }
}

controller.login = async(req,res) => {
    try {
        const {email,password} = req?.body;

        const employee = await EmployeeModel.findOne({email},{name:1,email:1,password:1, role:1}).lean()
        if(!employee) return res.status(404).json({message:"Employee not Found"})
       
        const isMatch = await bcrypt.compare(password, employee?.password)

        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }

        const token = createJwtToken({id: employee?._id,role:employee?.role})

        return res.status(200).json({message:"Employee login successfully",employee,token})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"})
    }
}


module.exports = controller

