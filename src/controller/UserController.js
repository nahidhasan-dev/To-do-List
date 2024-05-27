const UserModel = require('../model/UserModel');
const jwt = require('jsonwebtoken');


exports.registration = async (req, res) => {
    try {
        let reqBody = req.body;
        await UserModel.create(reqBody);
        res.json({ status: 'success', message: 'Registration successful' });
    } catch (error) {
        res.json({ status: 'fail', message: error });
    }
}


exports.login = async (req, res) => {
    try {
        let reqBody = req.body;
        let user = await UserModel.find(reqBody);
        if (user.length > 0) {
            let payload = { exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: reqBody['email'] };
            let token = jwt.sign(payload, 'todo-123-secret');
            res.json({ status: 'success', message: 'user found', token: token });
        } else {
            res.json({ status: 'fail', message: 'user not found' });
        }
    } catch (error) {
        res.json({ status: 'fail', message: error });
    }
}

// User profile read
exports.profileRead = async (req, res) => {
    try {
        let email = req.headers['email'];
        let result = await UserModel.find({ email: email });
        res.json({ status: "success", data: result });
    } catch (error) {
        res.json({ status: "fail", message: error });
    }
}


//User profile update
exports.profileUpdate = async (req, res) => {
    try {
        let email = req.headers['email'];
        let reqBody = req.body;
        let result = await UserModel.updateOne({ email: email }, reqBody);
        res.json({ status: "success", message: "update complete" });
    } catch (error) {
        res.json({ status: "fail", message: error });
    }
}