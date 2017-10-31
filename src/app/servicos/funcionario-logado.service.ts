import { Injectable } from '@angular/core';
import { Funcionario } from '../back/funcionario';

@Injectable()
export class FuncionarioLogadoService {
	public funcionario: Funcionario;
	
	constructor(){
		this.funcionario = new Funcionario("","","","");
	}
	
	setFuncionario (data) {
		this.funcionario = data;
	}
  
	getFuncionario () {
		return this.funcionario;
	}
}