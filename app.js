var express = require('express');
var logger = require('morgan');
var brickJs = require('../brick.js');
var Liquid = require('../brick-liquid');

var brk = brickJs();

brk.engine('.html', new Liquid());

var app = express();
app.use(express.static('public'));
app.use(logger('dev'));
app.use('/', brk.express);

app.listen(3000, function () {
  console.log('listening to 3000');
});

