

const {model,Schema,Types} = require("mongoose")

const shiftSchema = new Schema({
    name:{
        type: String,
        enum:['day','night','general'],
        required:true
    },
    startTime: {
        type: String,
        required:true,
    },

    endTime: {
        type: String,
        required: true
    },

   
})

module.exports = model('Shift',shiftSchema)