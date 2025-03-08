const crypto = require("crypto")

function generateSecret() {
    process.env.SECRET_KEY = crypto.randomBytes(64).toString('hex')
}

module.exports = generateSecret