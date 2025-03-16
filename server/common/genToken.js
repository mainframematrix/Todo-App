const jwt = require("jsonwebtoken")

// Function generates a token with a certain expiry duration
function generateToken(user, expire = "1h") {
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: expire })
    return token
}

module.exports = generateToken