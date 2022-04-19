import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoMoneda'
})
export class FormatoMonedaPipe implements PipeTransform {

  monedas: any = {
    euro: "€",
    dolar: "$",
    pesoArgentino: "$",
    lempira: "L"
  }
  
  transform(value: number, moneda: string): string {
    let resultado: string;
    
    if(moneda == "euro"){
      resultado = `${value.toFixed(2)} ${this.monedas[moneda]}`;
    }else{
      resultado = `${this.monedas[moneda]}${value.toFixed(2)}`;
    }

    return resultado;
  }

}
