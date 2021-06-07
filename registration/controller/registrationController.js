const db = require('../../models');
const userModel = db['User'];
const crypto = require('crypto');

class RegistrationController {
    constructor() {
    }

    registerUser(request, response) {
        const userData = request.body;
        if (userData) {
            const pwHash = crypto
                .createHash('md5')
                .update(userData.password)
                .digest('hex');
            userModel.create({
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                password: pwHash,
                roleId: 1
            }).then((savedUser) => {
                if (savedUser){
                    delete savedUser.password;
                    response.status(201).json(savedUser);
                }
            });
        }
    }
}

module.exports = {RegistrationController};
