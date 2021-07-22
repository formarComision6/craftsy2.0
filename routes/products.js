const express = require('express');
const router = express.Router();
const {add,detail, search} = require('../controllers/productsController');

/* /products */
router.get('/add',add);
router.get('/detail/:id',detail);
router.get('/search',search)

module.exports = router;