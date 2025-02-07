const mongoose = require("mongoose")


const dbConnection = () => {
    mongoose.connect(process.env.MONGOOSE_URI).then(()=> console.log("Database Connected Successfully")).catch((error)=> {console.log(`Error while connect database: ${error}`)})
}

module.exports = {
    dbConnection
}