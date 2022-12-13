import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudComponent } from './solicitud.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SolicitudComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SolicitudModule { }
