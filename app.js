const express = require("express")
const bodyParser = require("body-parser")
const CookieParser = require("cookie-parser")
const fs = require("fs")


/// IMPORT LOCAL FILE
const RouteHandeler = require("./Routes/UserRouteHandeler")
const TaskRouteHandeler = require("./Routes/TaskRouteHandeler")

// LOCAL FILE
require('dotenv').config();


const PORT = process.env.PORT 
const app = express()
app.use(express.json())
app.use(CookieParser())

app.use('/user', RouteHandeler )
app.use("/Task", TaskRouteHandeler)
app.all("*",(req,res)=>{
    res.status(400).json({massage:"Place ccheack Your Requist"})
})






app.listen(PORT,()=>{
    console.log(`Server Is Runing on ${PORT} PORT `)
})