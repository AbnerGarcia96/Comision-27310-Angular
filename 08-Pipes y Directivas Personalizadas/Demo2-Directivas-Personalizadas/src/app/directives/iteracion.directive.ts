import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { TestComponent } from '../componentes/test/test.component';

@Directive({
  selector: '[appIteracion]'
})
export class IteracionDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.viewContainer.createComponent(TestComponent);
  }

  @Input() set appIteracion(numero: number){
    for(let i=0; i<numero; i++){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
