const {productos} = require('../data/products_db');
const {usuarios, guardar} = require('../data/users_db')
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
        let errors = validationResult(req);
        let {nombre,email,contrasenia,genero,hobbies} = req.body;
        if(typeof hobbies === "string"){
            hobbies = hobbies.split()
        }
        if(errors.isEmpty()){
            let usuario = {
                nombre,
                email,
                contrasenia,
                genero,
                hobbies
            }
            usuarios.push(usuario);
            guardar(usuarios);
            return res.redirect('/')
        }else{
            return res.render('register',{
                productos,
                paises,
                old : req.body,
                errores : errors.mapped()
            })
        }
        
    },
    login : (req,res) => {
        return res.render('login',{
            productos
        })
    }
}