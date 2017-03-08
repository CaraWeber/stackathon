'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const volleyball = require('volleyball');

const app = express();

// logging and body-parsing
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res, next){
	res.render('index.html'); 
})

app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.render('error', {
    error: err
  });
});

app.listen(3001, function () {
        console.log('Server is listening on port 3001!');
    });