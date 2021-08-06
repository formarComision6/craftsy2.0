const {productos} = require('../data/products_db');
const paises = require('../data/paises');

module.exports = {
    register : (req,res) => {
        return res.render('register',{
            productos,
            paises
        })
    },
    processRegister : (req,res) => {
        return res.send(req.body)
    },
    login : (req,res) => {
        return res.render('login',{
            productos
        })
    }
}