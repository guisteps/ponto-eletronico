'use strict';

class Funcionario{

	constructor(){

		this.Mongodb = require("./db");
	}

	getUsers(callback){
		this.Mongodb.onConnect( (db,ObjectID) => {
			db.collection('users').find().sort({ nome:1 }).toArray( (err, result) => {
				callback(result);
				
			});
		});
	}
	
	getUserLogin(pCpf, pSenha, callback){
		this.Mongodb.onConnect( (db,ObjectID) => {
			db.collection('users').find( { cpf: pCpf, senha: pSenha } ).toArray( (err, result) => {
				callback(result);
				
			});
		});
	}

	addUser(data,callback){

		var response = {};
		this.Mongodb.onConnect( (db,ObjectID) => {
		
			db.collection('users').updateOne( 
					{ cpf: data.cpf }, 
					{ $set: { "nome" : data.nome, "senha": data.senha, "adm": data.adm } },
					{ upsert: true },	
				(err, result) => {
					if(err){
						response.error = true;
						response.message = 'Algo deu errado.';
						callback(response);	
					}else{
						callback(result);
					}
			});
			
		});
	}



	removeUsers( userID, callback ){
		
		this.Mongodb.onConnect( (db,ObjectID) => {
			
			db.collection('users').deleteOne(
				{
					_id : new ObjectID(userID)
				},
				(err, results) => {
					if(err){
						callback({
							error : true
						});
					}else{
						callback({
							error : false
						});
					}
				}
			);

		});

	}

	updateUser( userID , data , callback){

		this.Mongodb.onConnect( (db,ObjectID) => {

			db.collection('users').updateOne(
				{
					_id: new ObjectID(userID)
				},
				{
					$set : {
						name:data.name,
						gender:data.gender,
						country:data.country
					}		
				}, (err, results) => {

					
					if(err){
						callback({
							error : true
						});
					}else{
						callback({
							error : false
						});
					}

				}
			);
		});
	}
}

module.exports = new Funcionario();