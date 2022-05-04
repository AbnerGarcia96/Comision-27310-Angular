import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { CursoService } from './curso.service';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    ListaCursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
