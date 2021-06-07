const db = require('../../models');
const userModel = db['User'];
const authenticationFailureHandler = require('../authenticationFailure')

class AuthenticationController{

    authenticate(request, response) {
        userModel.findOne({
            where: {
                email: request.body.email
            }
        }).then((user) => {
            if (user.password === request.body.password){
                // create json web token
            }else{
                response.status(401).json('unauthorized');
            }
        });
    }
}


module.exports = {AuthenticationController};
