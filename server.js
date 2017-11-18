'use strict';
const express = require('express');
const cors = require('cors');
const fs   = require('fs');
const https = require('https');
const bodyParser = require('body-parser');
const funcionarioRoutes = require('./api/funcionarioRoutes');
const pontoRoutes = require('./api/pontoRoutes');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + "/dist/"));

new funcionarioRoutes(app).routesConfig();
new pontoRoutes(app).routesConfig();


var sslOptions = {
  key: fs.readFileSync('./ssl/ca2.key'),
  cert: fs.readFileSync('./ssl/ca.crt'),
  ca: fs.readFileSync('./ssl/ca.crt'),
  requestCert: true,
  rejectUnauthorized: false
};

https.createServer(sslOptions,app).listen(port, () => {
	console.log('Https - Express');
});




