import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuropaRoutingModule } from './europa-routing.module';
import { EuropaComponent } from './europa/europa.component';
import { EspanaComponent } from './espana/espana.component';
import { ItaliaComponent } from './italia/italia.component';


@NgModule({
  declarations: [
    EuropaComponent,
    EspanaComponent,
    ItaliaComponent
  ],
  imports: [
    CommonModule,
    EuropaRoutingModule
  ]
})
export class EuropaModule { }
