const express = require("express")
const helloBaseURL = require("../API/hello/base")

// Spawn a router
const helloRouter = express.Router()

// Router handles / and returns "Hello World"
helloRouter.get("/", helloBaseURL)

// File exports router
module.exports = helloRouter