const db = require('../../models');
const userModel = db['User'];

class AuthenticationController{

    authenticate(request, response) {
        return userModel.findOne({
            where: {
                email: request.body.email
            }
        });
    }
}


module.exports = {AuthenticationController};
