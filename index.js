const express = require('express');
const app = express();


const authRouter = require('./authentication')
const registrationRouter = require('./registration')

function log(request, response, next) {
    console.log('request reaches server from', request.url, '\n', 'received the following authentication headers:',
        request.headers['Authorization']);
    next();
}

app.use(log);
app.use('/api/login', authRouter);
app.use('api/register', registrationRouter);

// app.use('/api/resource', registrationRouter);


app.listen(8080, () => {
    console.log('server is listening on port 8080');
})
