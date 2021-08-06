const {productos} = require('../data/products_db');
const paises = require('../data/paises');
const {validationResult} = require('express-validator')

module.exports = {
    register : (req,res) => {
        return res.render('register',{
            productos,
            paises
        })
    },
    processRegister : (req,res) => {
        let errors = validationResult(req)
        return res.send(errors)
    },
    login : (req,res) => {
        return res.render('login',{
            productos
        })
    }
}