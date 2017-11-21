import { Component, Input, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PontoFuncionarioService } from './servicos/ponto-funcionario.service';
import { FuncionarioLogadoService } from './servicos/funcionario-logado.service';
import { PontoFuncionario } from './back/pontoFuncionario';

@Component({
  selector: 'ponto',
  templateUrl: './ponto.component.html',
  providers: [ PontoFuncionarioService ]
})

export class PontoComponent {
	
	private dataHoje: string;
	private ponto:PontoFuncionario; 
	public  marcacao: number;
	private pontoSalvo:PontoFuncionario;

	constructor(private pontoService: PontoFuncionarioService, private funcLogadoService: FuncionarioLogadoService) {
		let hoje = new Date();
		let cpf = this.funcLogadoService.funcionario.cpf;
		this.dataHoje = (hoje.getDate() < 10 ? "0" : "") + hoje.getDate().toString() + (hoje.getMonth()+1).toString() + hoje.getFullYear().toString();
		this.ponto =  new PontoFuncionario(cpf, this.dataHoje, null, null, null, null);	
	}	
	
	ngOnInit(){	
	}
	
	ngOnChanges(changes: any){}
	
	public marcarPonto(){	
		this.pontoService.getPontoFunc(this.ponto)
		.subscribe(result => this.pontoSalvo = result.pontos[0]);

		setTimeout(() => {
			switch(this.marcacao) { 
			   case 1: {
				  if(typeof this.pontoSalvo == 'undefined' || this.pontoSalvo.entrada == null) {
					  this.ponto.entrada = new Date();
					  this.pontoService.addEntrada(this.ponto).subscribe(
						 response =>  {	if(response.error) { 
											alert('Erro ao salvar entrada.');
										} else {
											alert('Entrada marcada com sucesso');
										}
									});
				   } else{
					 alert('Entrada ja registrada!');
				   }
				   break;
			   } 
			   case 2: { 
				    if(typeof this.pontoSalvo == 'undefined' || this.pontoSalvo.idaIntervalo == null) {
					  this.ponto.idaIntervalo = new Date();
					  this.pontoService.addIdaIntervalo(this.ponto).subscribe(
						 response =>  {	if(response.error) { 
											alert('Erro ao salvar Ida Intervalo.');
										} else {
											alert('Ida Intervalo marcada com sucesso');
										}
									});
				   } else{
					 alert('Ida Intervalo ja registrada!');
				   }
				   break;
			   } 
			   case 3: { 
				  if(typeof this.pontoSalvo == 'undefined' || this.pontoSalvo.voltaIntervalo == null) {
					  this.ponto.voltaIntervalo = new Date();
					  this.pontoService.addVoltaIntervalo(this.ponto).subscribe(
						 response =>  {	if(response.error) { 
											alert('Erro ao salvar Volta Intervalo.');
										} else {
											alert('Volta Intervalo marcada com sucesso');
										}
									});
				   } else{
					 alert('Volta Intervalo ja registrada!');
				   }
				   break;
			   } 
			   case 4: { 
				   if(typeof this.pontoSalvo == 'undefined' || this.pontoSalvo.saida == null) {
					  this.ponto.saida = new Date();
					  this.pontoService.addSaida(this.ponto).subscribe(
						 response =>  {	if(response.error) { 
											alert('Erro ao salvar Saida.');
										} else {
											alert('Saida marcada com sucesso');
										}
									});
				   } else{
					 alert('Saida ja registrada!');
				   }
				   break;
			   } 
			    default: {
			    	alert('Selecione uma opção.');
			    }
			} //FIM DO SWITCH
		},500);		
	}
	
}
