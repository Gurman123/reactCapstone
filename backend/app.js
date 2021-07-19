const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser')
const fileUpload = require('express-fileupload')

const errorMiddleware = require('./middlewares/errors');


app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//import all routes

const products = require('./routes/product');
const auth = require('./routes/auth');
const payment = require('./routes/payment');

const order = require('./routes/order');

app.use('/api', products)
app.use('/api', auth)
app.use('/api', payment)
app.use('/api', order)

app.use(errorMiddleware);

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
module.exports = app;