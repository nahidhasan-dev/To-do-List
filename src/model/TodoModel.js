const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    email: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    status: { type: String, require: true },
}, { timestamps: true, versionKey: false });

const TodoModel = mongoose.model('todolist', TodoSchema);

module.exports = TodoModel;