require("dotenv").config()
const express = require("express")

const {dbConnection} = require("./database/index")

const app = express()
const port = process.env.PORT

dbConnection()

app.use(express.json()) // validate request body

app.use('/api',require("./routes/index"))

app.all("*",(_req,res)=>{
    return res.status(404).json({status:404, message: "Page not found"})
})


app.listen(port,()=>{
  console.log(`Server is running on ${port}`)
})