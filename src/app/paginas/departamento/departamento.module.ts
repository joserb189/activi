import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentoComponent } from './departamento.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DepartamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DepartamentoModule { }
