const express = require('express')
const bodyParser = require('body-parser')
const CONFIG = require('./config/config')
const connectDB = require('./db/mongodb')
const books = require('./routes/books')
const authors = require('./routes/authors')
const rateLimit = require("express-rate-limit");
const helmet = require('helmet')
const morgan = require('morgan');
const logger = require('./logging/logger')
const auth0Middleware = require('./auth/auth0')
const { requiresAuth } = require('express-openid-connect');


const app = express()

//connect to db
connectDB()

//Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(auth0Middleware)


const limiter = rateLimit({
    windowMs: 0.5 * 60 * 1000, //  30 seconds
    max: 4, // Limit each IP to 100 requests per windowMs
    standardHeaders: true, // Return rate limit info in the RateLimit-* headers
    legacyHeaders: false, // Disable the X-RateLimit-* headers
    store: undefined, // Add a store option if you want to use Redis or other stores
});

app.use(limiter);
app.use(morgan('dev'));
app.use(helmet())


app.use('/api/v1/books', requiresAuth(), books);
app.use('/api/v1/authors', requiresAuth(), authors);


app.get("/", (req, res) => {
    res.send('Hello Bookstore')
})

//Error handler Middleware
app.use((err, req, res, next) => {
    logger.error(err.message)
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})



app.listen(CONFIG.PORT, () => {
    logger.info(`Server started on http://localhost:${CONFIG.PORT}`);
});