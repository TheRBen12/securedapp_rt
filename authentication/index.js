const authRouter = require('express').Router();

const authenticationController = require('./controller/authenticationController');

const jwtVerification = require('./jwtVerification');

authRouter.post('/', authenticationController.authen)

