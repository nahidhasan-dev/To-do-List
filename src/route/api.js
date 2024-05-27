const express = require('express');
const UserController = require('../controller/UserController');
const TodoController = require('../controller/TodoController');
const AuthMiddleWare = require('../middleware/AuthMiddleWare');
const router = express.Router();


router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/profileRead', AuthMiddleWare, UserController.profileRead);
router.get('/profileUpdate', AuthMiddleWare, UserController.profileUpdate);

router.post('/todo/create', AuthMiddleWare, TodoController.create);
router.get('/todo/read', AuthMiddleWare, TodoController.read);
router.post('/todo/update/:id', AuthMiddleWare, TodoController.update);
router.get('/todo/delete/:id', AuthMiddleWare, TodoController.delete);



module.exports = router;