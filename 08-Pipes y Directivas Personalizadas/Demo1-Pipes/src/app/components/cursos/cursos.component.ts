import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any = [{
    nombre: 'Angular',
    duracion: {
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 3, 1)
    },
    descripcion: 'Curso de Angular intermedio'
  },{
    nombre: 'ReactJS',
    duracion: {
      fechaInicio: new Date(2022, 4, 1),
      fechaFin: new Date(2022, 7, 1)
    },
    descripcion: 'Curso de ReactJS para principiantes'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
