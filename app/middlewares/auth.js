const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    try {
        const token = req.header("x-auth-token");
        if(!token) return res.status(403).json({message: 'access denied'});

        const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        console.log(decoded);
        req.user = decoded;
        next();

    } catch {
        res.status(400).json({message: 'invalid token'});
    }
}