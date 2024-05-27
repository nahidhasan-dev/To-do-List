const TodoModel = require('../model/TodoModel');
const UserModel = require('../model/UserModel');


exports.create = async (req, res) => {
    try {
        let email = req.headers['email'];
        let reqBody = req.body;
        reqBody.email = email;
        await TodoModel.create(reqBody);
        res.json({ status: "success", message: 'Todolist created successfully' });
    } catch (error) {
        res.json({ status: "fail", message: error });
    }
}

exports.read = async (req, res) => {
    try {
        let email = req.headers['email'];
        let data = await TodoModel.find({ email: email });
        res.json({ status: "success", data: data });
    } catch (error) {
        res.json({ status: "fail", message: error });
    }
}

exports.update = async (req, res) => {
    try {
        let email = req.headers['email'];
        let { id } = req.params;
        let reqBody = req.body;

        await TodoModel.updateOne({ _id: id, email: email }, reqBody);
        res.json({ status: "success", message: 'Task Updated successfully' });
    } catch (error) {
        res.json({ status: "fail", message: error });
    }
}

exports.delete = async (req, res) => {
    try {
        let email = req.headers['email'];
        let { id } = req.params;
        await TodoModel.deleteOne({ _id: id, email: email });
        res.json({ status: "success", message: 'Task delete successfully' });
    } catch (error) {
        res.json({ status: "fail", message: error });
    }
}