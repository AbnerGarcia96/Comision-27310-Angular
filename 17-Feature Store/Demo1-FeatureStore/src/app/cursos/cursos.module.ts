import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { StoreModule } from '@ngrx/store';
import { cursoFeatureKey, cursoReducer } from './state/curso.reducer';
import { CursoService } from './curso.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListaCursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule,
    StoreModule.forFeature(cursoFeatureKey, cursoReducer)
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
