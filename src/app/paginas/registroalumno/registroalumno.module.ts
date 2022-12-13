import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroalumnoComponent } from './registroalumno.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegistroalumnoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RegistroalumnoModule { }
