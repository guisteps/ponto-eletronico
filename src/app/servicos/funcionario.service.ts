import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Funcionario } from '../back/funcionario';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class FuncionarioService {

	private apiUrl: string;
	private BASE_URL: string;
	private BASE_URL_LOGIN: string;

	constructor(private http: Http) {
		this.apiUrl = environment.apiUrlProd;

		this.BASE_URL = this.apiUrl + '/api/users/';
		this.BASE_URL_LOGIN = this.apiUrl + '/api/user-login/';
	}


	public getAllFunc() {
		return this.http.get(this.BASE_URL)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}


	public login(cpf: string, senha: string): Observable<any> {
		return this.http.get(this.BASE_URL_LOGIN + cpf + "/" + senha)
			.map((res: Response) => res.json())
			.catch(err => Observable.throw(err.message));
	}


	public addFunc(body: Funcionario) {
		let options = new RequestOptions({
			headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
		});
		return this.http.post(this.BASE_URL, JSON.stringify(body), options)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}


	public updateFunc(body: Funcionario) {
		let options = new RequestOptions({
			headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
		});

		return this.http.put('http://localhost:3000/api/users/${body[cpf]}', JSON.stringify(body), options)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}


	public deleteFunc(cpf: number) {
		let options = new RequestOptions({
			headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
		});

		return this.http.delete('http://localhost:3000/api/users/${cpf}', options)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

}
