// this is error to any sentax code like "require or extends"
// this step lazem tkon first in app file
process.on('unCaughtExcrption', (err) => {
    console.log('unCaughtExcrption', err);
})

const express = require('express');
const { dbConnection } = require('./src/database/dbConnection');
const app = express()
require('dotenv').config({ path: './config/.env' })
const port = process.env.PORT || 4000;

var morgan = require('morgan'); // module morgan to show data for all requests like :(type , time , size , status)
const AppError = require('./src/utilts/AppError');
const globalMiddlewareErr = require('./src/utilts/globalMiddlewareErr');
const { allRequires } = require('./src/utilts');


// middleware
app.use(express.json())


if (process.env.NODE_ENV === 'development') {// in status development only
    app.use(morgan('dev')) // if development useing the module morgan
}

allRequires(app);

// to handling any errors in url
app.all('*', (req, res, next) => {
    next(
        new AppError(`can't find this route: ${req.originalUrl} on server`, 404)
    )
    // the "req.originalUrl" is path from URL "ell btektbh lo false hatkon de el natega"
})

// global error handling for middleware
// by default the express now this function will handle all errors in middleware

app.use(globalMiddlewareErr)

dbConnection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// global error handling in programming Error
// this is error to any sentax code like "mongodb number out of range"
// this step lazem tkon end in app file
process.on('unHandeldRejction', (err) => {
    console.log('unHandeldRejction',err);
})