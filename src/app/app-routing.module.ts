import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './compnentes/header/header.component';
import { NavbarComponent } from './compnentes/navbar/navbar.component';
import { AcademicoComponent } from './paginas/academico/academico.component';
import { AcreditacionComponent } from './paginas/acreditacion/acreditacion.component';
import { ActividadcompleComponent } from './paginas/actividadcomple/actividadcomple.component';

import { CarreraComponent } from './paginas/carrera/carrera.component';
import { DepartamentoComponent } from './paginas/departamento/departamento.component';
import { EvaluacionComponent } from './paginas/evaluacion/evaluacion.component';
import { EvidenciapresenComponent } from './paginas/evidenciapresen/evidenciapresen.component';
import { EvidenciascomprobaComponent } from './paginas/evidenciascomproba/evidenciascomproba.component';
import { ExtraescolaresComponent } from './paginas/extraescolares/extraescolares.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { JefedepartamentoComponent } from './paginas/jefedepartamento/jefedepartamento.component';
import { PeriodoComponent } from './paginas/periodo/periodo.component';
import { RegistroalumnoComponent } from './paginas/registroalumno/registroalumno.component';
import { SolicitudComponent } from './paginas/solicitud/solicitud.component';
import { TipoactiComponent } from './paginas/tipoacti/tipoacti.component';



const routes: Routes = [
  {
    path:'', redirectTo:'inicio', pathMatch:'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  
  
  {
    path: 'jefedepa',
    component: JefedepartamentoComponent
  },
 
  {
    path: 'acade mico ',
    component: AcademicoComponent
  },
  {
    path: 'acreditacion',
    component: AcreditacionComponent
  },
  {
    path: 'carrera',
    component: CarreraComponent
  },
  {
    path: 'departamento',
    component: DepartamentoComponent
  },
  {
    path: 'evaluacion',
    component: EvaluacionComponent
  },
  {
    path: 'evidenciascomproba',
    component: EvidenciascomprobaComponent
  },
  {
    path: 'extraescolares',
    component: ExtraescolaresComponent
  },
  {
    path: 'periodo',
    component: PeriodoComponent
  },
  {
    path: 'registroalumno',
    component: RegistroalumnoComponent
  },
  {
    path: 'solicitud',
    component: SolicitudComponent
  },
  {
    path: 'tipoacti',
    component: TipoactiComponent
  },
  {
    path: 'actividadcomple',
    component: ActividadcompleComponent
  },
  {
    path: 'evidenciapresen',
    component: EvidenciapresenComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
