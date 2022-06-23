const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

router.get('/signup', userController.signup_get);
router.post('/signup', userController.signup_post);
router.get('/login', userController.login_get);
router.post('/login', userController.login_post);
router.get('/questions', userController.login_get);
router.get('/questions/:id', userController.login_get);

module.exports = router


// question_get