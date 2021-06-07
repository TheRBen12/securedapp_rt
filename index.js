const express = require('express');
const app = express();


const authRouter = require('./authentication')
const registrationRouter = require('./registration')

function log(request, response, next) {
    console.log('request reached server from {}, received the following authentication headers {}',
        request.url, request.headers['Authorization']);
    next();
}

app.use(log);
app.use('/api/login', authRouter);
app.use('api/register', registrationRouter);


app.listen(8080, () => {
    console.log('server is listening on port 8080');
})
