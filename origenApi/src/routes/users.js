const express = require('express');
const router = express.Router();
const User = require("../models/User");
const passport = require("passport")

// Helpers
const { isAuthenticated } = require('../helpers/auth');

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
  });
  
  router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/users/signin',
    failureFlash: true
  }));

router.get("/users" , (req,res) => {
    res.render("users/index")
})

router.get("/users/signup" ,(req,res) => {
    res.render("users/signup")
})

router.post("/users/signup" ,async (req,res) => {
    const userInfo = {
        ...req.body
    }
    const emailUser = await User.findOne({email : userInfo.email})
    const errors = [];
    if (userInfo.confirm_password != userInfo.password) {
        errors.push({text : "las contraseñana no coinciden, intenta nuevamente"});        
    }
    if (userInfo.password.length < 6) {
        errors.push({text : "la contraseña debe tener minimo 6 caracteres"});
    }
    if(!userInfo.name){
        errors.push({text : "ingrese un nombre valido"})
    }
    if(!userInfo.email){
        errors.push({text: "ingresa un correo valido"})
    }
    if(emailUser){
        errors.push({text : "Este correo ya se encuentra registrado"})
    }
    if(errors.length > 0){
        res.render("users/signup",{
            userInfo,
            errors
        })
    }else{
        const newUser = new User(userInfo);
        newUser.password =  await newUser.encryptPassword(userInfo.password)
        await newUser.save();
        req.flash("success_msg","Bienvenido, ahora tu eres parte del Origen!")
        res.redirect("/users");
    }
})

router.get('/users/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'Estás desconectado ahora.');
    res.redirect('/users/signin');
  });


router.get('/users/all', isAuthenticated, async (req, res) => {

    const errors = [];
    if(user.type == 0){
        const users = await User.find();
        res.redirect('/users/all',users);
    }else{
        errors.push({text : "No Tienes autorizacion para este modulo"})
        res.redirect('/users/all',errors);
    }
});  
module.exports = router;