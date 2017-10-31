import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';

import { CadastroComponent } from './cadastro.component';
import { CadastroModule } from './cadastro.module';

import { ConsultaComponent } from './consulta.component';
import { ConsultaModule } from './consulta.module';

import { PontoComponent } from './ponto.component';
import { PontoModule } from './ponto.module';

import { AppComponent } from './app.component';
import { FuncionarioLogadoService } from './servicos/funcionario-logado.service';

const routes: Routes = [
	{ path: '', redirectTo: 'app', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'cadastro', component: CadastroComponent },
	{ path: 'consulta', component: ConsultaComponent },
  { path: 'ponto', component: PontoComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    HttpModule,
	LoginModule,
    CadastroModule,
    ConsultaModule,
    PontoModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [FuncionarioLogadoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
