import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcademicoComponent } from './paginas/academico/academico.component';
import { AcreditacionComponent } from './paginas/acreditacion/acreditacion.component';

import { EvaluacionComponent } from './paginas/evaluacion/evaluacion.component';
import { ExtraescolaresComponent } from './paginas/extraescolares/extraescolares.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { JefedepartamentoComponent } from './paginas/jefedepartamento/jefedepartamento.component';

import { FooterComponent } from './compnentes/footer/footer.component';
import { HeaderComponent } from './compnentes/header/header.component';
import { NavbarComponent } from './compnentes/navbar/navbar.component';
import { CarreraComponent } from './paginas/carrera/carrera.component';
import { PeriodoComponent } from './paginas/periodo/periodo.component';
import { TipoactiComponent } from './paginas/tipoacti/tipoacti.component';
import { SolicitudComponent } from './paginas/solicitud/solicitud.component';
import { EvidenciascomprobaComponent } from './paginas/evidenciascomproba/evidenciascomproba.component';
import { EvidenciapresenComponent } from './paginas/evidenciapresen/evidenciapresen.component';
import { ActividadcompleComponent } from './paginas/actividadcomple/actividadcomple.component';
import { DepartamentoComponent } from './paginas/departamento/departamento.component';
import { AlumnoComponent } from './alumno/alumno/alumno.component';
import { AlumnoModule } from './paginas/alumno/alumno.module';
import { HttpClientModule } from '@angular/common/http';
import { AcademicoModule } from './paginas/academico/academico.module';


@NgModule({
  declarations: [
    AppComponent,
    AcademicoComponent,
    AcreditacionComponent,
   
    EvaluacionComponent,
    ExtraescolaresComponent,
    InicioComponent,
    JefedepartamentoComponent,
    
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    CarreraComponent,
    PeriodoComponent,
    TipoactiComponent,
    SolicitudComponent,
    EvidenciascomprobaComponent,
    EvidenciapresenComponent,
    ActividadcompleComponent,
    DepartamentoComponent
  ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AlumnoModule,
    AppRoutingModule
    
   
    
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
