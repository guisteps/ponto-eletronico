/*
* Angular 2 CRUD application using Nodejs
* @autthor Shashank Tiwari
*/
'use strict';
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const funcionarioRoutes = require('./utils/funcionarioRoutes');
const pontoRoutes = require('./utils/pontoRoutes');
class Server{

	constructor(){
		this.port = 8080;
		this.host = 'localhost';
		this.app = express();
	}

	appConfig(){
		this.app.use(bodyParser.json());
		this.app.use(
			cors()
		);
	}

	
	includeRoutes(){
		new funcionarioRoutes(this.app).routesConfig();
		new pontoRoutes(this.app).routesConfig();
	}
		

	appExecute(){
		this.appConfig();
		this.includeRoutes();
		this.app.listen(this.port, this.host, () => {
			console.log('Listening on http://localhost:8080');
		});
	}
}

const app = new Server();
app.appExecute();