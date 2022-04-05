import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cursoFecha'
})
export class CursoFechaPipe implements PipeTransform {
  meses: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  transform(value: any): string {
    let resultado: string;
    resultado = "De " + this.meses[value.fechaInicio.getMonth()] + " a " + this.meses[value.fechaFin.getMonth()];
    return resultado;
  }

}
