var express = require('express');
var path = require('path');
var logger = require('morgan');
var brickJs = require('brick.js');
var Liquid = require('brick-liquid');

var brk = brickJs({
    root: path.join(__dirname, 'modules'),
    engine: new Liquid()
});

var app = express();
app.use(logger('dev'));
app.use('/', brk.express);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
