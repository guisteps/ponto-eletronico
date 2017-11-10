export class PontoFuncionario {
	constructor(
		public cpf: string,
		public dia: string,
		public entrada: Date,
		public idaIntervalo: Date,
		public voltaIntervalo: Date,
		public saida: Date,

		public strEntrada?: string,
		public strIdaIntervalo?: string,
		public strVoltaIntervalo?: string,
		public strSaida?: string
	) {}
}