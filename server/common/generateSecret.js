const crypto = require("crypto")

function generateSecret() {
    process.env.JWT_SECRET = crypto.randomBytes(64).toString('hex')
}

module.exports = generateSecret