import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-personalizado',
  templateUrl: './pipe-personalizado.component.html',
  styleUrls: ['./pipe-personalizado.component.css']
})
export class PipePersonalizadoComponent implements OnInit {
  datos: any = {
    fecha: new Date(),
    texto: "Texto de Prueba :)",
    monto: 1000.5,
    porcentaje: 0.548
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
