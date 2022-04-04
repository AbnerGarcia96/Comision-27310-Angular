import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
  @Input() mensajeRecibido: string = "";
  @Output() eventoSalida: EventEmitter<any> = new EventEmitter<any>();
  variableComponenteHijo = [1,2,3,4,5]

  constructor() {}

  ngOnInit(): void {
  }

  enviarDatos(){
    this.eventoSalida.emit({
      mensaje: 'Mensaje enviado hacia el componente padre',
      id: 1,
      array: [1,2,3,4]
    });
  }

}
