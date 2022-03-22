import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fondoGris]'
})
export class DirectivaPersonalizadaDirective {

  constructor(
    private renderer: Renderer2, elementRef: ElementRef
  ) {
    renderer.setStyle(elementRef.nativeElement, 'background-color', '#d1d1d1');
  }

}
