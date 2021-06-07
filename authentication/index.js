const authRouter = require('express').Router();

const {AuthenticationController} = require('./controller/authenticationController');

const authenticationController = new AuthenticationController();

const jwtVerification = require('./jwtVerification');

authRouter.post('/', authenticationController.authenticate);

module.exports = authRouter;

