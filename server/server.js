const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');

app.use(cors()); ///cross origin

app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to api!'
    })
});

//////hard coded users

const appUsers = {
    "max@gmail.com": {
        email: 'max@gmail.com',
        name: 'Max Miller',
        pw: 12345
    },
    "lilly@gmail.com": {
        email: 'lilly@gmail.com',
        name: 'Lilly put',
        pw: 1234
    }
};

const serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';

app.post('/api/login', (req, res) => {

    if (req.body) {
        const user = appUsers[req.body.email];
        console.log(req.body.password, user.pw);
        if (user && user.pw === +req.body.password) {
            const userWithoutPassword = { ...user };
            delete userWithoutPassword.pw;
            const token = jwt.sign(userWithoutPassword, serverJWT_Secret); // <==== The all-important "jwt.sign" function
            res.status(200).json({
                user: userWithoutPassword,
                token: token
            });
        } else {
            res.status(403).send({
                errorMessage: 'Permission denied!'
            });
        }
    } else {
        res.status(403).send({
            errorMessage: 'Please provide email and password'
        });
    }

});

const jwtMiddleware = (req, res, next) => {
    const authString = req.headers['authorization'];
    if (typeof authString === 'string' && authString.indexOf(' ') > -1) {
        console.log('middleware');
        const authArray = authString.split(' ');
        const token = authArray[1];
        jwt.verify(token, serverJWT_Secret, (err, decoded) => {
            if (err) {
                res.sendStatus(403);
                console.log('middleware -if');
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
};

const accountBalances = {
    'max@gmail.com': 5000,
    'lilly@gmail.com': 3000
};

const getBalance = (email) => {
    return accountBalances[email];
};

app.get('/api/balance', jwtMiddleware, (req, res) => {
    const user = req.decoded;
    const balance = getBalance(user.email);
    if (balance) {
        res.status(200).send({
            balance: balance
        })
    } else {
        res.status(500);
    }
});

app.listen('3000', (err, res) => {
    console.log('listen at 3000');
});