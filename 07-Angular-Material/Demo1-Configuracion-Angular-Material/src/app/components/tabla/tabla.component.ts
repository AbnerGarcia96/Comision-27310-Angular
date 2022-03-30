import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  columnas: string[] = ['indice', 'nombre'];
  datos: any[] = [{
    indice: 1,
    nombre: 'Abner'
  },{
    indice: 1,
    nombre: 'Pablo'
  },{
    indice: 1,
    nombre: 'Victoria'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
