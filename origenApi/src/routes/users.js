const express = require('express');
const router = express.Router();

router.get("/users/singin" ,(req,res) => {
    res.render("users/singin")
})
router.get("/users/signup" ,(req,res) => {
    res.render("users/signup")
})

router.post("/users/signup" ,(req,res) => {
    const userInfo = {
        ...req.body
    }
    const errors = [];
    if (userInfo.confirm_password != userInfo.password) {
        errors.push({text : "las contraseñana no coinciden, intenta nuevamente"});        
    }
    if (userInfo.password.length < 6) {
        errors.push({text : "ingrese una contraseña con mas larga"});
    }
})
module.exports = router;