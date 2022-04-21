import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmericaComponent } from './america/america.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { ChileComponent } from './chile/chile.component';

const routes: Routes = [
  {path: '', component: AmericaComponent, children: [
    {path: 'argentina', component: ArgentinaComponent},
    {path: 'chile', component: ChileComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmericaRoutingModule { }
