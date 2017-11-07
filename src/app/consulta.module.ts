import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComboBoxModule } from 'ng2-combobox';
import { FormsModule } from '@angular/forms';
import { ConsultaComponent } from './consulta.component';


@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    ComboBoxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ConsultaComponent]
})

export class ConsultaModule { }
