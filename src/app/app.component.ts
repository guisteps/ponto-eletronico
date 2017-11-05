import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from './back/funcionario';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

@Injectable()
export class AppComponent {
  
  public nome: string = '';
  public logado: boolean = false;

  constructor( public router: Router){}

  ngOnInit(){
  	 this.router.navigate(['/login']);
	}
	
}