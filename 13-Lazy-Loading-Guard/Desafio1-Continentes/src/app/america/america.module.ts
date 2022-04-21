import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmericaRoutingModule } from './america-routing.module';
import { AmericaComponent } from './america/america.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { ChileComponent } from './chile/chile.component';


@NgModule({
  declarations: [
    AmericaComponent,
    ArgentinaComponent,
    ChileComponent
  ],
  imports: [
    CommonModule,
    AmericaRoutingModule
  ]
})
export class AmericaModule { }
