var fs = require("fs");
var express = require("express");
var path = require('path');

// IMPORTS //

var indexRoutes = require('./routes/index')

// CREATE APP //

var app = express();

app.set('view engine', 'html');
app.engine('html', function(path, options,callback){
    fs.readFile(path, 'utf-8', callback);
})

// MIDDLEWARE //
app.use(express.static(path.join(__dirname, '../client')));

// ROUTES //
app.use('/', indexRoutes);

// ERROR HANDLER //

app.use(function(err, req, res, next){
    res.status(err || 500);
})

// SERVE API //

module.exports = app;