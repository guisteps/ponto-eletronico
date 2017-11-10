'use strict';

class Ponto{

	constructor(){
		this.Mongodb = require("./db");
	}

	getPontos(callback){
		this.Mongodb.onConnect( (db,ObjectID) => {
			db.collection('pontos').find().toArray( (err, result) => {
				callback(result);
				
			});
		});
	}
	
	
	getFuncPonto(pCpf, pDia, callback){
		this.Mongodb.onConnect( (db,ObjectID) => {
			db.collection('pontos').find( { cpf: pCpf, dia: pDia } ).toArray( (err, result) => {
				callback(result);
				
			});
		});
	}
	
	getFuncPontoMes(pCpf, pMes, callback){
		this.Mongodb.onConnect( (db,ObjectID) => {
			db.collection('pontos').find( { cpf: pCpf, dia: {$regex:  pMes + "$"} } ).toArray( (err, result) => {
				callback(result);				
			});
		});
	}


	addEntrada(data,callback){
		var response = {};

		this.Mongodb.onConnect( (db,ObjectID) => {
			db.collection('pontos').updateOne( 
				{ cpf: data.cpf, dia: data.dia }, 
				{ $set: { "entrada" : data.entrada } },
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
	
	addIdaIntervalo(data,callback){
		var response = {};

		this.Mongodb.onConnect( (db,ObjectID) => {
			db.collection('pontos').updateOne( 
				{ cpf: data.cpf, dia: data.dia }, 
				{ $set: { "idaIntervalo" : data.idaIntervalo } },
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
	
	addVoltaIntervalo(data,callback){
		var response = {};

		this.Mongodb.onConnect( (db,ObjectID) => {
			db.collection('pontos').updateOne( 
				{ cpf: data.cpf, dia: data.dia }, 
				{ $set: { "voltaIntervalo" : data.voltaIntervalo } },
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
	
	
	addSaida(data,callback){
		var response = {};

		this.Mongodb.onConnect( (db,ObjectID) => {
			db.collection('pontos').updateOne( 
				{ cpf: data.cpf, dia: data.dia }, 
				{ $set: { "saida" : data.saida } },
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

}

module.exports = new Ponto();