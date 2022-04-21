import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanaComponent } from './espana/espana.component';
import { EuropaComponent } from './europa/europa.component';
import { ItaliaComponent } from './italia/italia.component';

const routes: Routes = [
  {path: '', component:EuropaComponent, children: [
    {path: 'espana', component: EspanaComponent},
    {path: 'italia', component: ItaliaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuropaRoutingModule { }
