var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const jwt = require('jsonwebtoken');

var authRouter = require('./routes/auth');
var todosRouter = require('./routes/todos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.use('/auth', authRouter);

// Auth Middleware
app.use('/app', (req, res, next) => {
  var token = req.headers['access-token'];
  if (!token) {
    res.status(401).send({
      result: 'error',
      message: 'No token provided.'
    });
  } else {
    jwt.verify(token, process.env.APP_SECRET, (error, decoded) => {
      if (error || !decoded) {
        res.status(401).send({
          result: 'error',
          message: 'Failed to authenticate token.'
        });
      }
      // User authenticated, do the stuff
      next();
    });
  }
});

app.use('/app/todos', todosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
