const express = require('express');
const router = express();

const userController = require('../controllers/user.controller');

// Testing route
router.get('/test', userController.test);
router.get('/', userController.root);

// CRUD Operations
router.post('/create', userController.userCreate);
router.get('/:id', userController.userDetails);
router.put('/:id/update', userController.userUpdate);
router.delete('/:id/delete', userController.userDelete);

module.exports = router;