const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('./config');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "You are not Authorized" });
            } else {
                req.jwt = decodedToken;

                next();
            }
        });
    } else {
        res.status(401).json({ message: "No token was provided" });
    }
};