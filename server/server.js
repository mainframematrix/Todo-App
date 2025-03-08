const express = require("express")
const helloRouter = require("./API/hello/webHandler")

// Creates an instance of express
const serverApplication = express()

// server handles /hello with a handler
serverApplication.use("/hello", helloRouter)

// load all the env variables
require("dotenv").config()

// get port from env variables or default to 8080
const PORT = process.env.PORT || 8080

// start server on the port
serverApplication.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})