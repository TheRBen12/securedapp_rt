const registrationRouter = require('express').Router();
const {RegistrationController} = require('./controller/registrationController');
const registrationController = new RegistrationController();


registrationRouter.post('/', registrationController.registerUser);


module.exports = registrationRouter;
