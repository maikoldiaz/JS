import Debug from 'debug'
import { secret } from "../config"
import jwt from "jsonwebtoken";

const debud = new Debug('platzi-overflow:auth')
export const users = [{
    firstName: "Maikol",
    lastName: "Diaz",
    email: "maikol@diaz.com",
    password: "123456",
    _id: 123
}];

export const findUserByEmail = (e) => {
    return users.find(({ email }) => email === e)
}

export const required = (req, res, next) => {
    jwt.verify(req.query.token, secret, (err, token) => {
        if (err) {
            Debug('JWT was not encrypted with our secret')
            return res.status(401).json({
                message: "Unauthorized",
                error: err
            })
        }
        Debug(`Token verified ${token}`);
        req.user = token.user;
        next();
    })
}