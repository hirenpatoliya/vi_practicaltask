const {model,Schema,Types} = require("mongoose")

const employeeSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum:['employee','admin'],
        default:'employee'
    },
    shift: {
        type: Types.ObjectId,
        ref:"Shift",
        default: null
    }
})

module.exports = model('Employee',employeeSchema)