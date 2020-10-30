import express from 'express'
import jwt from "jsonwebtoken";
import { findUserByEmail, users } from "../middleware";
import { secret } from "../config";

const app = express.Router();
const comparePass = (providerPass, userPass) => providerPass === userPass;


app.post('/signin', (req, res, next) => {
    const { email, password } = req.body;
    const user = findUserByEmail(email);
    console.log(user)
    if (!user) {
        f
        debud(`user with email ${email} not found`)
        return handleLoginErro(res);
    }
    if (!comparePass(password, user.password)) {
        debud(`password do not match`)
        return handleLoginErro(res, "el correo y la contraseña no coinciden");
    }
    const token = createToken(user)
    res.status(200).json({
        message: 'Login succeded',
        token,
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    })
})

app.post("/signup", (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = {
        _id: +new Date(),
        firstName,
        lastName,
        email,
        password
    }
    debud(`Crea ting new user :${user}`)
    users.push(user);
    user.password = null;
    const token = createToken(user);
    res.status(201).json({
        message: 'User saved',
        token,
        userId: user._id,
        firstName,
        lastName,
        email
    })
})

const createToken = (payload) => jwt.sign({ payload }, secret, { expiresIn: 86400 })

const handleLoginErro = (res, meessage) => {
    return res.status(401).json({
        message: 'Login failed',
        error: message || 'Email and password don\'t match'
    })
}
export default app;