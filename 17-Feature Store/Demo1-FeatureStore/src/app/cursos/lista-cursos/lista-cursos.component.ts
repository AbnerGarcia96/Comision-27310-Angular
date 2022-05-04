import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos!: Curso[];
  usuario!: Usuario;

  constructor(
  ) {}

  ngOnInit(): void {
  }

  cerrarSesion(){
  }
}
