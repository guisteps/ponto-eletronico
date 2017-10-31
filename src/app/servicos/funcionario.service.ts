import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Funcionario } from '../back/funcionario';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class FuncionarioService {

  private BASE_URL:string = 'http://localhost:8080/api/users/';
  private BASE_URL_LOGIN:string = 'http://localhost:8080/api/user-login/';

    constructor(
	        private http: Http
	) { }


	public getAllFunc(){
		return this.http.get(this.BASE_URL)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}


	public login(cpf: string, senha: string) {
		return this.http.get(this.BASE_URL_LOGIN + cpf + "/" + senha)
			.map(response => response.json());
	}


	public addFunc(body:Funcionario){
		let options = new RequestOptions({
        	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
        });
		return this.http.post(this.BASE_URL,JSON.stringify(body), options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}


	public updateFunc(body:Funcionario){
        let options = new RequestOptions({
        	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
        });

		return this.http.put('http://localhost:8080/api/users/${body[cpf]}',JSON.stringify(body), options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}


	public deleteFunc(cpf:number){
        let options = new RequestOptions({
        	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
        });

		return this.http.delete('http://localhost:8080/api/users/${cpf}',options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}
