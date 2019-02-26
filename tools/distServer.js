/* eslint-disable no-var */
'use strict';
// import express from 'express';
// import path from 'path';
// import open from 'open';
// import compression from 'compression';

var express = require('express');
var path = require('path');
var open = require('open');
var https = require('https');
var fs = require('fs');
// import compression from 'compression';

/* eslint-disable no-console */

var port = 1121;
var app = express();

// app.use(compression());

app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

console.log('Server listening on Port : ' + port);


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});