import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {
  monedas: any = {
    euro: "€",
    dolar: "$",
    pesoArgentino: "$",
    lempira: "L"
  }
  transform(value: number, moneda: string): string {
    let resultado: string;
    
    if(moneda == "euro"){
      resultado = `${value} ${this.monedas[moneda]}`;
    }else{
      resultado = `${this.monedas[moneda]}${value}`;
    }

    return resultado;
  }

}
