var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var budgetRouter = require('./routes/budget');
var expensesRouter = require('./routes/expenses');
// var categoryRouter = require('./routes/category');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

//Location of static assets
app.use(express.static(path.join(__dirname, "/client/build")));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/budget', budgetRouter);
app.use('/expenses', expensesRouter);
// app.use('/category', categoryRouter);

//Respond with index.html for unmatched routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

module.exports = app;
