import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PontoFuncionario } from '../back/pontoFuncionario';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
import { isDevMode } from '@angular/core';

@Injectable()
export class PontoFuncionarioService {

	private apiUrl: string;
	private BASE_URL_DIA: string;
	private BASE_URL_MES: string;
	private BASE_URL_ENTRADA: string;
	private BASE_URL_IDAINTERVALO;
	private BASE_URL_VOLTAINTERVALO;
	private BASE_URL_SAIDA: string;

	constructor(private http: Http) {
		this.apiUrl = environment.apiUrlProd;

		this.BASE_URL_DIA = this.apiUrl + '/api/ponto-funcionario-dia/';
		this.BASE_URL_MES = this.apiUrl + '/api/ponto-funcionario-mes/';
		this.BASE_URL_ENTRADA = this.apiUrl + '/api/ponto-funcionario-entrada/';
		this.BASE_URL_IDAINTERVALO = this.apiUrl + '/api/ponto-funcionario-idaintervalo/';
		this.BASE_URL_VOLTAINTERVALO = this.apiUrl + '/api/ponto-funcionario-voltaintervalo/';
		this.BASE_URL_SAIDA = this.apiUrl + '/api/ponto-funcionario-saida/';
	}


	public getPontoFunc(body: PontoFuncionario) {
		return this.http.get(this.BASE_URL_DIA + body.cpf.toString() + "/" + body.dia)
			.map(response => response.json());
	}


	public getFuncPontoMes(cpf: string, mes: string) {
		return this.http.get(this.BASE_URL_MES + cpf + "/" + mes)
			.map(response => response.json());
	}


	public addEntrada(body: PontoFuncionario) {
		let options = new RequestOptions({
			headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
		});
		return this.http.put(this.BASE_URL_ENTRADA, JSON.stringify(body), options)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public addIdaIntervalo(body: PontoFuncionario) {
		let options = new RequestOptions({
			headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
		});
		return this.http.put(this.BASE_URL_IDAINTERVALO, JSON.stringify(body), options)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public addVoltaIntervalo(body: PontoFuncionario) {
		let options = new RequestOptions({
			headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
		});
		return this.http.put(this.BASE_URL_VOLTAINTERVALO, JSON.stringify(body), options)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public addSaida(body: PontoFuncionario) {
		let options = new RequestOptions({
			headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
		});
		return this.http.put(this.BASE_URL_SAIDA, JSON.stringify(body), options)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}


	/*public updatePontoFunc(body: PontoFuncionario){
		let urlSearchParams = new URLSearchParams();
			urlSearchParams.append('cpf', body.cpf.toString());
			urlSearchParams.append('dia', body.dia.toString());
			let bodyCompleto = urlSearchParams.toString();
			
        let options = new RequestOptions({
        	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
        });

		return this.http.put('${this.BASE_URL}${bodyCompleto}',JSON.stringify(bodyCompleto), options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}*/


}
