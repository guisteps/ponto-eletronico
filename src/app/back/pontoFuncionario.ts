export class PontoFuncionario {
	constructor(
		public cpf: string,
		public dia: string,
		public entrada: Date,
		public idaIntervalo: Date,
		public voltaIntervalo: Date,
		public saida: Date
	) {}
}