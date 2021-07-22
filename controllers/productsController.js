const categorias = require('../data/categories_db');
const productos = require('../data/products_db');

module.exports = {
    add : (req,res) => {
        return res.render('productAdd',{
            categorias,
           productos
        })
    },
    detail : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);

        return res.render('productDetail',{
            producto,
            productos
        })
    },
    search : (req,res) => {
        let result = productos.filter(producto => producto.category === req.query.search)
        return res.render('resultSearch',{
            result,
            productos,
            busqueda : req.query.search
        })
    }
}