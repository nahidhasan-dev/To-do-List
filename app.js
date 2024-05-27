const express = require('express');
const router = require('./src/route/api');
const app = new express();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');


app.use(cors());

app.use(helmet());
app.use(hpp());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
let limiter = rateLimit({ windoMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

let URL = 'mongodb+srv://nahidhasandev:nahid0304@cluster0.bz1ycat.mongodb.net/todolist';
let OPTION = { user: "", pass: "", autoIndex: true };
mongoose.connect(URL, OPTION).then((res) => {
    console.log("Database Connection success");
}).catch((err) => {
    console.log(err);
});


app.use('/api', router);

app.use('*', (req, res) => {
    res.status(404).json({ data: "not found" });
});


module.exports = app;