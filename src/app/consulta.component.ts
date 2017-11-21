import { Component, OnInit } from '@angular/core';
import { Funcionario } from './back/funcionario';
import { PontoFuncionario } from './back/pontoFuncionario';
import { FuncionarioService } from './servicos/funcionario.service';
import { PontoFuncionarioService } from './servicos/ponto-funcionario.service';
import { FuncionarioLogadoService } from './servicos/funcionario-logado.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function s2ab(s: string): ArrayBuffer {
	const buf: ArrayBuffer = new ArrayBuffer(s.length);
	const view: Uint8Array = new Uint8Array(buf);
	for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
}

@Component({
  selector: 'consulta',
  templateUrl: './consulta.component.html',
  providers: [ FuncionarioService, PontoFuncionarioService ]
})

export class ConsultaComponent implements OnInit{
  
  public funcionarios: Funcionario[] = [];
  public pontos: PontoFuncionario[] = [];
  public listaExcel : PontoExcel[] = [];
  public anos: number[] = [];
  public meses = [];
  public mes: string;
  public ano: string;
  public cpf: string;
  
  
  constructor(private funcionarioService: FuncionarioService,
			  private pontoService: PontoFuncionarioService,
			  private funcLogadoService: FuncionarioLogadoService){}
  
  ngOnInit(){
	this.funcionarioService.getAllFunc().subscribe(
		result => this.funcionarios = result.users);

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
	
	setTimeout(() => {	
		if(typeof this.pontos != 'undefined'){
			this.pontos.forEach( p => {
				p.dia = p.dia.substring(0,2) +'/'+ p.dia.substring(2,4) +'/'+ p.dia.substring(4,8);
				p.strEntrada  = this.formataData(p.entrada);
				p.strIdaIntervalo  = this.formataData(p.idaIntervalo);
				p.strVoltaIntervalo = this.formataData(p.voltaIntervalo);
				p.strSaida = this.formataData(p.saida);
			});
		}
	}, 500);
  }


  private formataData(data) : string {
  	var d = new Date(data).toString(); //trazer para nosso fuso-horario
  	return d.substring(16,21);
  }


  public exportaExcel(){
  	this.listaExcel = [];
  	//montando o titulo
  	var nome = this.funcLogadoService.funcionario.nome;
  	nome = nome.substr(0,nome.indexOf(' '));
  	var titulo = 'Relatorio_' + nome + '_' + this.meses[+this.mes - 1].name + '_' + this.ano + '.xlsx' ;

  	//montando a lista
    //this.listaExcel[0] = new PontoExcel('Dia', 'Entrada', 'Ida Intervalo', 'Volta Intervalo', 'Saida');
	this.pontos.forEach( p => {
		let excel = new PontoExcel(p.dia, p.strEntrada, p.strIdaIntervalo, p.strVoltaIntervalo, p.strSaida);
		this.listaExcel.push(excel);
	});

	/* make the worksheet */
	var ws = XLSX.utils.json_to_sheet(this.listaExcel);
	
	/* add to workbook */
	var wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, "Pontos");

	/* write workbook (use type 'binary') */
	var wbout = XLSX.write(wb, {bookType:'xlsx', type:'binary'});
	saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), titulo);
  }

}


export class PontoExcel {
	constructor(
	public dia: string,
	public entrada: string,
	public idaIntervalo: string,
	public voltaIntervalo: string,
	public saida: string
	) {}
}
