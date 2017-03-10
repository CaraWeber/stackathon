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
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/node_modules/material-design-lite/material.min.css', (req, res, next)=>{
	res.sendFile(path.resolve(__dirname, './node_modules/material-design-lite/material.min.css'))
})

app.get('/node_modules/material-design-lite/material.min.js', (req, res, next)=> {
	res.sendFile(path.resolve(__dirname, './node_modules/material-design-lite/material.min.js'))
})

app.get('//node_modules/material-design-lite/material.min.js.map', (req, res, next)=> {
	res.sendFile(path.resolve(__dirname, './node_modules/material-design-lite/material.min.js.map'))
})

app.get('/*', function (req, res, next){
	res.sendFile(path.resolve(__dirname, 'public', 'index.html')); 
})

app.listen(3001, function () {
        console.log('Server is listening on port 3001!');
    });