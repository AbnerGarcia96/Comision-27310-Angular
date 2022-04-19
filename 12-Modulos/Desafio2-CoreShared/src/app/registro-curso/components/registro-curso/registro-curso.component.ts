import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-curso',
  templateUrl: './registro-curso.component.html',
  styleUrls: ['./registro-curso.component.css']
})
export class RegistroCursoComponent implements OnInit {
  costoCurso: number = 99;
  moneda: string = 'euro';
  
  constructor() { }

  ngOnInit(): void {
  }

}
