import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { SharedModule } from '../shared/shared.module';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CursosService } from './cursos.service';
import { EditarCursoDialogComponent } from './editar-curso-dialog/editar-curso-dialog.component';


@NgModule({
  declarations: [
    CursosComponent,
    ListaCursosComponent,
    EditarCursoDialogComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
