'use strict';
/*requiring mongodb node modules */
const mongodb=require('mongodb');
const mongoose = require('mongoose');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;
const assert = require('assert');
const MongoUrl='mongodb://localhost:27017/angular2';

module.exports.onConnect = (callback) => {	

	MongoClient.connect(process.env.MONGODB_URI || MongoUrl, (err, db) => {
		assert.equal(null, err);
		callback(db,ObjectID);
	});
	
}

	
module.exports.usersSchema = new mongoose.Schema({
		cpf: String,
		nome: String,
		senha: String,
		adm: String
		}, { collection: 'users' }
	);
	
module.exports.pontosSchema = new mongoose.Schema({
		cpf: String,
		dia: String,
		entrada: Date,
		idaIntervalo: Date,
		voltaIntervalo: Date,
		saida: Date
		}, { collection: 'pontos' }
	);
