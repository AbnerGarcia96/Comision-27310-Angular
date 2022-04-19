import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatoMonedaPipe } from './formato-moneda.pipe';



@NgModule({
  declarations: [
    FormatoMonedaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatoMonedaPipe
  ]
})
export class SharedModule { }
