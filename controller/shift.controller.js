const controller = {}
const EmployeeModel = require("../model/employee")
const ShiftModel = require("../model/shift")

controller.assignShift = async(req,res) => {
    try {
            const { employeeId, shiftId} = req.body;
           
            const employee = await EmployeeModel.findById(employeeId)
            if(!employee) return res.status(404).json({message:"Employee not found"})

            const shift = await ShiftModel.findById(shiftId).lean()
            if(!shift) return res.status(404).json({message:"Shift not found"})
        
            employee.shift = shiftId;
            await employee.save()

            return res.status(201).json({message: "Shift assigned successfully"})
        } catch (error) {
            return res.status(500).json({message:"Something went wrong"})
    }
}

controller.switchShift = async(req,res) => {
    try {
        const employee = req?.employee;
        const {shiftId} = req?.body;
        const newShift = await ShiftModel.findById(shiftId).lean()
        if(!newShift) return res.status(404).json({message:"Shift not found"})

        employee.shift = shiftId
        await employee.save()

        return res.status(200).json({message: "Shift Change Successfully"})

    }  catch (error) {
            return res.status(500).json({message:"Something went wrong"})
    }

}

controller.addShift = async(req,res) => {
    // name:"day",startTime:"9 AM",endTime:"6 PM"
    // name:"night",startTime:"9 PM",endTime:"6 AM"
    // name:"general",startTime:"11 AM",endTime:"8 PM"
  const shift = await ShiftModel.create({name:"general",startTime:"11 AM",endTime:"8 PM"});
  return res.status(201).json({message:"Shift Added Successfully", shift})
}

module.exports = controller