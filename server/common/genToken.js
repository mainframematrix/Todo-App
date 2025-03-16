const jwt = require("jsonwebtoken")

// Function generates a token with a certain expiry duration
function generateToken(user, secretKey, expire = "1h") {
    const token = jwt.sign(user, secretKey, { expiresIn: expire })
    return token
}

module.exports = generateToken