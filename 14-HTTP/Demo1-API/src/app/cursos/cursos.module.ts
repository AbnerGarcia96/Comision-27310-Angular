import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { SharedModule } from '../shared/shared.module';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { EditarCursoDialogComponent } from './editar-curso-dialog/editar-curso-dialog.component';


@NgModule({
  declarations: [
    CursosComponent,
    ListaCursosComponent,
    NuevoCursoComponent,
    EditarCursoDialogComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class CursosModule { }
