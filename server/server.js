const express = require("express")
const helloRouter = require("./Handler/webHandler")
const generateSecret = require("./common/generateSecret")

// load all the env variables from a .env file in the same directory
require("dotenv").config()

// get port from env variables or default to 8080
const PORT = process.env.PORT || 8080

// create random secret key and assign it as a env variable
if (!process.env.JWT_SECRET) {
    // If no JWT secret is found, generate a new one and set it in process.env
    const generatedSecret = generateSecret();
    console.log('No JWT_SECRET found, generating a new one:', process.env.JWT_SECRET); // Set dynamically
}

// Creates an instance of express
const serverApplication = express()

// server handles /hello with a handler
serverApplication.use("/hello", helloRouter)

// start server on the port
serverApplication.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})