import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { RegistroCursoComponent } from './components/registro-curso/registro-curso.component';
import { RegistroCursoRoutingModule } from './registro-curso-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DetalleCursoComponent,
    RegistroCursoComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RegistroCursoRoutingModule
  ]
})
export class RegistroCursoModule { }
