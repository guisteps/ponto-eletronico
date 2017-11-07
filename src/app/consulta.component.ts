import { Component, OnInit } from '@angular/core';
import { Funcionario } from './back/funcionario';
import { PontoFuncionario } from './back/pontoFuncionario';
import { FuncionarioService } from './servicos/funcionario.service';
import { PontoFuncionarioService } from './servicos/ponto-funcionario.service';

@Component({
  selector: 'consulta',
  templateUrl: './consulta.component.html',
  providers: [ FuncionarioService, PontoFuncionarioService ]
})

export class ConsultaComponent implements OnInit{
  
  public funcionarios: Funcionario[] = [];
  public pontos: PontoFuncionario[] = [];
  public anos: number[] = [];
  public meses = [];
  public mes: string;
  public ano: string;
  public cpf: string;
  
  
  constructor(private funcionarioService: FuncionarioService,
			  private pontoService: PontoFuncionarioService){

	this.funcionarioService.getAllFunc().subscribe(
		result => this.funcionarios = result.users);
	}
  
  ngOnInit(){
	this.meses[0] =  {'value': '01', 'name': 'Janeiro'};
	this.meses[1] =  {'value': '02', 'name': 'Fevereiro'};
	this.meses[2] =  {'value': '03', 'name': 'Março'};
	this.meses[3] =  {'value': '04', 'name': 'Abril'};
	this.meses[4] =  {'value': '05', 'name': 'Maio'};
	this.meses[5] =  {'value': '06', 'name': 'Junho'};
	this.meses[6] =  {'value': '07', 'name': 'Julho'};
	this.meses[7] =  {'value': '08', 'name': 'Agosto'};
	this.meses[8] =  {'value': '09', 'name': 'Setembro'};
	this.meses[9] =  {'value': '10', 'name': 'Outubro'};
	this.meses[10] = {'value': '11', 'name': 'Novembro'};
	this.meses[11] = {'value': '12', 'name': 'Dezembro'};
			   
	for(let i = 2017; i <= (new Date()).getFullYear(); i++){
		this.anos.push(i);
	}	
  }
  
  
  public pesquisar() {
	let mesAno = this.mes + this.ano;
	this.pontoService.getFuncPontoMes(this.cpf, mesAno)
		.subscribe(result => this.pontos = result.pontos);
  }

}