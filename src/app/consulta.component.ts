import { Component } from '@angular/core';
import { Funcionario } from './back/funcionario';

@Component({
  selector: 'consulta',
  templateUrl: './consulta.component.html'
})

export class ConsultaComponent {
  
  public funcionarios: Funcionario[];
  public anos: number[] = [];
  public meses = [];

  constructor(){
	this.meses[0] = {'value': 1, 'name': 'Janeiro'};
	this.meses[1] = {'value': 2, 'name': 'Fevereiro'};
	this.meses[2] = {'value': 3, 'name': 'Março'};
	this.meses[3] = {'value': 4, 'name': 'Abril'};
	this.meses[4] = {'value': 5, 'name': 'Maio'};
	this.meses[5] = {'value': 6, 'name': 'Junho'};
	this.meses[6] = {'value': 7, 'name': 'Julho'};
	this.meses[7] = {'value': 8, 'name': 'Agosto'};
	this.meses[8] = {'value': 9, 'name': 'Setembro'};
	this.meses[9] = {'value': 10, 'name': 'Outubro'};
	this.meses[10] = {'value': 11, 'name': 'Novembro'};
	this.meses[11] = {'value': 12, 'name': 'Dezembro'};
			   
			   
	this.funcionarios = [];
	
	for(let i = 2017; i <= (new Date()).getFullYear(); i++){
		this.anos.push(i);
	}
	
  }

  /*<div *ngFor='let mes of meses;' class="selectContainer main-info" style="width:220px;">
			{{ mes }}
		</div>    VAI TRAZER A LISTA*/ 
  
}