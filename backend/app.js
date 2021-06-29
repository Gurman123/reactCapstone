const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');


const errorMiddleware = require('./middlewares/errors');


app.use(express.json());
app.use(cookieParser());
//import all routes

const products = require('./routes/product');
const auth = require('./routes/auth');

app.use('/api', products)
app.use('/api', auth)

app.use(errorMiddleware);

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
module.exports = app;