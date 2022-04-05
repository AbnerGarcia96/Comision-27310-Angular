import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    console.log(value, args);
    return value.texto + ' Agregado desde mi pipe personalizado';
  }

}
