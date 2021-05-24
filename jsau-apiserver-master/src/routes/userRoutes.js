const express = require('express');
const router = express.Router();

//---
const userController = require('../controllers/userController');

//---get all----
router.get('/users', userController.getAll);
router.get('/isLogged', userController.isLogged);

//----post----
router.post('/register', userController.newUser);
router.post('/login', userController.loginUser);
router.post('/logout', userController.logoutUser);

//----put-----
router.put('/:id', userController.updateUser);

//----delete----


module.exports = router;
