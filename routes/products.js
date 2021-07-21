const express = require('express');
const router = express.Router();
const {add} = require('../controllers/productsController');

/* /products */
router.get('/add',add);

module.exports = router;