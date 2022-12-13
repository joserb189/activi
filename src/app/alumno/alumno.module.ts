import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoComponent } from '../paginas/alumno/alumno.component';


@NgModule({
  declarations: [
    AlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule
  ]
})
export class AlumnoModule { }
