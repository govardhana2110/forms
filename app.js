var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var permanentrouter = require ('./routes/permanent_routes');
var presentrouter = require ('./routes/present_routes');
var qualioficationrouter = require ('./routes/qualification_routes');
var registrationrouter = require ('./routes/registration_routes');
var skillrouter = require ('./routes/skill_routes');
var experiencerouter = require ('./routes/experience_routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/permanent',permanentrouter);
app.use('/present',presentrouter);
app.use('/registration',registrationrouter);
app.use('/qualification',qualioficationrouter);
app.use('/skill',skillrouter);
app.use('/experience',experiencerouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
