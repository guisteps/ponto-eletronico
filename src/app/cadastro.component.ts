import { Component, Input, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FuncionarioService } from './servicos/funcionario.service';
import { Funcionario } from './back/funcionario';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  providers: [ FuncionarioService ]
})

export class CadastroComponent implements OnChanges {
  

	public funcionario:Funcionario = new Funcionario(null,'','','');

	constructor(
			private funcionarioService: FuncionarioService
		) {}

	ngOnChanges(changes: any){}

	public addFunc(){
		this.funcionarioService.addFunc(this.funcionario).subscribe(
                        response =>  {
							if(response.error) { 
	                        	alert('Erro ao salvar funcionario.');
	                        } else {
	                        	alert('Funcionario ' + this.funcionario.nome + ' salvo com sucesso');
	                        	this.limpar();
	                        }
                        },
                        error=> {
                       		alert('Erro ao salvar funcionário.');
                       	}
                    );
	}


	public limpar(){
		this.funcionario = new Funcionario(null,'','', '');
	}
}