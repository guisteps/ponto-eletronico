'use strict';
const ponto = require("./ponto");

class pontoRoutes{

	constructor(app){
		this.app = app;
	}


	appRoutes(){

		this.app.get('/api/ponto-funcionario',(request,response) =>{
			ponto.getPontos( (result) => {
				if (result) {
					response.status(200).json({
						pontos:result
					});
				}else{
					response.status(404).json({
						message:'Nenhum registro encontrado.'
					});
				}
			});
		});
		
		
		this.app.get('/api/ponto-funcionario-dia/:cpf/:dia',(request, response) =>{
			ponto.getFuncPonto( request.params.cpf, request.params.dia, (result) => {
				if (result) {
					response.status(200).json({
						pontos:result
					});
				}else{
					response.status(404).json({
						message:'Nenhum registro encontrado.'
					});
				}
			});
		});
		

		this.app.put('/api/ponto-funcionario-entrada/',(request,response) =>{
			if (request.body != null) {
				ponto.addEntrada( request.body , (result)=>{
					if (result.error) {
						response.status(403).json({
							error: true,
							message: 'Erro.' 
						});
					} else{
						ponto.getPontos( (result) => {
							if (result) {
								response.status(200).json({
									error : false,
									users:result
								});
							}else{
								response.status(404).json({
									error : true,
									message:'Algo deu errado.'
								});
							}
						});
					};
				});
			} else {
				response.status(403).json({	error : true,message : 'Parâmetros inválidos.' 	});
			}
		});
		
		
		this.app.put('/api/ponto-funcionario-idaintervalo/',(request,response) =>{
			if (request.body != null) {
				ponto.addIdaIntervalo( request.body , (result)=>{
					if (result.error) {
						response.status(403).json({
							error: true,
							message: 'Erro.' 
						});
					} else{
						ponto.getPontos( (result) => {
							if (result) {
								response.status(200).json({
									error : false,
									users:result
								});
							}else{
								response.status(404).json({
									error : true,
									message:'Algo deu errado.'
								});
							}
						});
					};
				});
			} else {
				response.status(403).json({	error : true,message : 'Parâmetros inválidos.' 	});
			}
		});
		
		this.app.put('/api/ponto-funcionario-voltaintervalo/',(request,response) =>{
			if (request.body != null) {
				ponto.addVoltaIntervalo( request.body , (result)=>{
					if (result.error) {
						response.status(403).json({
							error: true,
							message: 'Erro.' 
						});
					} else{
						ponto.getPontos( (result) => {
							if (result) {
								response.status(200).json({
									error : false,
									users:result
								});
							}else{
								response.status(404).json({
									error : true,
									message:'Algo deu errado.'
								});
							}
						});
					};
				});
			} else {
				response.status(403).json({	error : true,message : 'Parâmetros inválidos.' 	});
			}
		});
		
		this.app.put('/api/ponto-funcionario-saida/',(request,response) =>{
			if (request.body != null) {
				ponto.addSaida( request.body , (result)=>{
					if (result.error) {
						response.status(403).json({
							error: true,
							message: 'Erro.' 
						});
					} else{
						ponto.getPontos( (result) => {
							if (result) {
								response.status(200).json({
									error : false,
									users:result
								});
							}else{
								response.status(404).json({
									error : true,
									message:'Algo deu errado.'
								});
							}
						});
					};
				});
			} else {
				response.status(403).json({	error : true,message : 'Parâmetros inválidos.' 	});
			}
		});
		
	}

	routesConfig(){
		this.appRoutes();
	}
}
module.exports = pontoRoutes;