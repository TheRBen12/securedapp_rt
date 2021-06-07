const db = require('../../models');
const userModel = db['User'];
const authenticationFailureHandler = require('../authenticationFailure')
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class AuthenticationController {

    authenticate(request, response) {
        const pwHash = crypto
            .createHash('md5')
            .update(request.body.password)
            .digest('hex');

        userModel.findOne({
            where: {
                email: request.body.email
            }
        }).then((user) => {
            if (user) {
                if (user.password === pwHash) {
                    const payload = { ...user };
                    delete payload.password;
                    const token = jwt.sign(payload, 'secret');
                    response.json({token});
                } else {
                    response.status(401).json('unauthorized');
                }
            } else {
                response.status(500).json('user not exists')
            }
        });
    }
}


module.exports = {AuthenticationController};
