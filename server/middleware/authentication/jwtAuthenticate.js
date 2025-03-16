const jwt = require("jsonwebtoken")

// function that authenticates the jwt token
function authenticateJWT(req, res, next) {
    if (process.env.SECRET_KEY) {
        // Extract JWT from the 'Authorization' header
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.sendStatus(403); // Forbidden if no token is provided
        }

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden if token is invalid
            }
            req.user = user; // Attach user info to request object
            next(); // Pass control to the next middleware
        });
    }
    else{
        
    }
};

module.exports = authenticateJWT