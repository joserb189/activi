import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvidenciapresenComponent } from '../paginas/evidenciapresen/evidenciapresen.component';
import { AlumnoComponent } from './alumno/alumno.component';

const routes: Routes = [

  {
    path:'', redirectTo:'alumno', pathMatch:'full'

  },
  {
    path: 'alumno', component: AlumnoComponent
  },
  {
    path: 'evidenciapresen',
    component: EvidenciapresenComponent
  },
  

  {
    path: '**',
    redirectTo: 'alumno'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
