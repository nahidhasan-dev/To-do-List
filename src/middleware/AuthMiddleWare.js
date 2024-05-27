const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.headers['token'];
    jwt.verify(token, 'todo-123-secret', function (error, decodedData) {
        if (error) {
            res.status(401).json({ status: 'Unauthorized' });
        }
        else {
            email = decodedData['data'];
            req.headers.email = email;
            next();
        }
    });
}