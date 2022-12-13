import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicoComponent } from './academico.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AcademicoComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    AcademicoComponent,
    RouterModule

  ]
})
export class AcademicoModule { }
