import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/core/inicio/modelos/curso';
import { CursosService } from '../cursos.service';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe((cursos: Curso[])=>{
      this.cursos = cursos;
    });
  }

  abrirDialogModificar(curso: Curso){
    this.dialog.open(EditarCursoDialogComponent, {
      width: '300px',
      data: curso
    });
  }

  eliminarCurso(id: string){

  }

}
