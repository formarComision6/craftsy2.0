const express = require('express');
const router = express.Router();
const {add,detail, search,save,edit,update,remove} = require('../controllers/productsController');

/* /products */
router.get('/add',add);
router.post('/add',save);
router.get('/detail/:id',detail);
router.get('/search',search);
router.get('/edit/:id',edit);
router.put('/edit/:id',update);
router.delete('/remove/:id',remove);

module.exports = router;