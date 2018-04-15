var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var appRoutes = require('./routes/app');
var messageRoutes = require("./routes/messages");
var app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/node-angular');

// view engine setup
app.set('views', path.join(__dirname, 'views')); // tell express to use this directory as views
app.set('view engine', 'hbs'); // tell express use hbs for view engine

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Config for preventing CORS event errors (CORS means Cross origin requests)
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use("/message", messageRoutes);
app.use('/', appRoutes);  // Since our routes are separate tell express to use / for our routes
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
