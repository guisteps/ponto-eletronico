'use strict';
const express = require('express');
const cors = require('cors');
const fs   = require('fs');
const https = require('https');
const bodyParser = require('body-parser');
const funcionarioRoutes = require('./api/funcionarioRoutes');
const pontoRoutes = require('./api/pontoRoutes');
class Server{

	constructor(){		 
 		this.port = 3000;		 
 		this.app = express();
 	}

	appConfig(){		 
		this.app.use(function (req, res, next){
		  if (req.headers['x-forwarded-proto'] === 'https') {
			res.redirect('http://' + req.hostname + req.url);
		  } else {
			next();
		  }
		});
		
 		this.app.use(bodyParser.json());		 
 		this.app.use(cors());		 
 		var distDir = __dirname + "/dist/";		 
		this.app.use(express.static(distDir));
 	}

	includeRoutes(){		 
 		new funcionarioRoutes(this.app).routesConfig();		 
 		new pontoRoutes(this.app).routesConfig();		 
     		 
     this.app.get('/', function(request, response) {		 
      response.send('Hello World!');		
     });		 
	}	
	
	appExecute(){		 
 		this.appConfig();		 
 		this.includeRoutes();		
 		this.app.listen(process.env.PORT || this.port, () => {		
  			console.log('nodejs aqui http://localhost:3000');		
   		});		
 	}		
 }		
 		
 const app = new Server();		
 app.appExecute();