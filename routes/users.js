var express = require('express');
var router = express.Router();

const {register,login, processRegister} = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');

const registeValidator = require('../validations/registerValidator');

/* GET users listing. */
router.get('/register', register);
router.post('/register', registerValidator, processRegister)
router.get('/login', login);

module.exports = router;
