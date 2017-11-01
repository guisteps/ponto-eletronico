/*
* Angular 2 CRUD application using Nodejs
* @autthor Shashank Tiwari
*/

'use strict';
const funcionario = require("./funcionario");

class funcionarioRoutes{

	constructor(app){
		this.app = app;
	}


	/* creating app Routes starts */
	appRoutes(){


		/* Route to get all users starts*/
		this.app.get('/api/users',(request,response) =>{
			funcionario.getUsers( (result) => {
				if (result) {
					response.status(200).json({
						users:result
					});
				}else{
					response.status(404).json({
						message:'Nenhum funcionario encontrado.'
					});
				}
			});
		});
		/* Route to get all users ends*/
		
		
		this.app.get('/api/user-login/:cpf/:senha',(request, response) =>{
			funcionario.getUserLogin( request.params.cpf, request.params.senha, (result) => {
				if (result) {
					response.status(200).json({
						funcionario:result
					});
				}else{
					response.status(404).json({
						message:'Nenhum registro encontrado.'
					});
				}
			});
		});
		
		
		/* Route to add new user starts*/
		this.app.post('/api/users/',(request,response) =>{
				funcionario.addUser( request.body , (result)=>{
					if (result.error) {
						response.status(403).json({
							error : true,
							message : 'Erro.' 
						});
					} else{

						funcionario.getUsers( (result) => {
							if (result) {
								response.status(200).json({
									error : false,
									users:result
								});
							}else{
								response.status(404).json({
									error : true,
									message:'No usres found.'
								});
							}
						});
					};
				});
		});
		/* Route to add new user ends*/


		/* Route to delete user starts*/
		this.app.delete('/api/users/:id',(request,response) =>{

			if (request.params.id && request.params.id!='') {

				funcionario.removeUsers( request.params.id, (result)=>{
					
					if (result.error) {
						
						response.status(403).json({
							error : true,
							message : 'Error.' 
						});

					} else{

						funcionario.getUsers( (result) => {
							if (result) {
								response.status(200).json({
									error : false,
									users:result
								});
							}else{
								response.status(404).json({
									error : true,
									message:'No usres found.'
								});
							}
						});

						
					};

				});

			}else{
				response.status(403).json({
					error : true,
					message : 'Invalid user Id.' 
				});
			}
		});
		/* Route to delete user ends*/
		

		/* Route to update user starts*/
		this.app.put('/api/users/:id',(request,response) =>{


			if (request.params.id && request.params.id!='') {

				funcionario.updateUser( request.params.id, request.body , (result)=>{
					
					if (result.error) {
						
						response.status(403).json({
							error : true,
							message : 'Error.' 
						});

					} else{


						funcionario.getUsers( (result) => {
							if (result) {
								response.status(200).json({
									error : false,
									users:result
								});
							}else{
								response.status(404).json({
									error : true,
									message:'No usres found.'
								});
							}
						});

						
					};

				});

			}else{
				response.status(403).json({
					error : true,
					message : 'Invalid user Id.' 
				});
			}			
		});
		/* Route to update user ends*/
		
	}

	routesConfig(){
		this.appRoutes();
	}
}
module.exports = funcionarioRoutes;