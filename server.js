
'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const funcionarioRoutes = require('./api/funcionarioRoutes');
const pontoRoutes = require('./api/pontoRoutes');
class Server{

	constructor(){
		this.port = 3000;
		this.host = 'localhost';
		this.app = express();
	}

	appConfig(){
		this.app.use(bodyParser.json());
		this.app.use(cors());
		var distDir = __dirname + 'public';
		this.app.use(express.static(distDir));
	}

	
	includeRoutes(){
		new funcionarioRoutes(this.app).routesConfig();
		new pontoRoutes(this.app).routesConfig();
	}
		

	appExecute(){
		this.appConfig();
		this.includeRoutes();
		this.app.set('port', (process.env.PORT || this.port));
		console.log('nodezão rodando: ' + this.port);
	}
}

const app = new Server();
app.appExecute();