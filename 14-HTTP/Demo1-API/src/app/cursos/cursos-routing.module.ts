import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';

const routes: Routes = [
  {path:'', component: CursosComponent, children: [
    {path: 'lista', component: ListaCursosComponent},
    {path: 'nuevo-curso', component: NuevoCursoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
