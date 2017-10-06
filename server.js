'use strict';

var port = process.env.PORT || 80;

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
var users = require('./lib/users');

var app = express();

var server = http.createServer(app);

app.use(bodyParser.json());
app.use('/', users);

server.listen(port, function () {
    console.log('Listening...');
});