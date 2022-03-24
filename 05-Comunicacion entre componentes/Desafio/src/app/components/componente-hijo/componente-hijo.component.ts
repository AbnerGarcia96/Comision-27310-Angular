import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
  @Input() mensaje: string = "";
  @Output() evento = new EventEmitter();
  mensajeSalida: string = "Hola, te envio un mensaje desde el compoente hijo";
  
  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos(){
    this.evento.emit(this.mensajeSalida);
  }  
}
