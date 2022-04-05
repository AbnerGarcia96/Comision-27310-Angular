import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnInit{
  @Input('appResaltado') estilos !: any;

  constructor(
    private elemento: ElementRef
  ) { }

  ngOnInit(): void {
    this.elemento.nativeElement.style.backgroundColor = this.estilos.color;
    this.elemento.nativeElement.style.fontSize = this.estilos.tamano;
  }

}
