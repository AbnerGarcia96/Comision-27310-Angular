import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-nativas',
  templateUrl: './pipes-nativas.component.html',
  styleUrls: ['./pipes-nativas.component.css']
})
export class PipesNativasComponent implements OnInit {
  datos: any = {
    fecha: new Date(),
    texto: "Texto de Prueba :)",
    monto: 1000.5,
    porcentaje: 0.548
  }

  constructor() { }

  ngOnInit(): void {
  }

}
