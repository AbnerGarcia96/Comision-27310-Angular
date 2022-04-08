import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any = [];
  
  constructor(
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.cursoService.obtenerObsevable().subscribe((cursos)=>{
      this.cursos = cursos;
    })
  }

  modificarCurso(curso: any){
    this.cursoService.modificarCurso(curso);
  }
}
