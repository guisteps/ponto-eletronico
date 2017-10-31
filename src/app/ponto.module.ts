import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PontoComponent } from './ponto.component';


@NgModule({
  declarations: [
    PontoComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [PontoComponent]
})

export class PontoModule { }
